# -*- coding: utf-8 -*-

import logging
from zope.publisher.browser import BrowserView
# from operator import attrgetter
from plone import api

logger = logging.getLogger('bebest')

months = {}
months['01'] = u"Janvier"
months['02'] = u"Février"
months['03'] = u"Mars"
months['04'] = u"Avril"
months['05'] = u"Mai"
months['06'] = u"Juin"
months['07'] = u"Juillet"
months['08'] = u"Aout"
months['09'] = u"Septembre"
months['10'] = u"Octobre"
months['11'] = u"Novembre"
months['12'] = u"Décembre"


class bebestNewsView(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def _date_fr(self, date, display_time=False):
        """
        :param date: une date à convertir en ``str`` au format présenté
          habituellement en france
        :type date: objet python ``date``
        :param display_time: on inclu ou non l'heure
        :type display_time: Bolean
        :return: une chaine de caractères représentant une date,
          éventuellement avec l'heure
        """
        j = date.strftime("%d")
        m = date.strftime("%m")
        y = date.strftime("%Y")
        M = months[m]
        str_date = j + ' ' + M + ' ' + y
        # import pdb;pdb.set_trace()
        if display_time:
            H = date.strftime("%H")
            M = date.strftime("%M")
            str_date = str_date + ' ' + H + ':' + M
        return str_date

    def getTextEN(self):
        """
        :return: retourne, en format *raw* le ``RichText`` anglais
        """
        try:
            return self.context.presentation_en.raw
        except Exception:
            return False

    def getDisplayEN(self):
        """
        :return: ``True`` si on affiche le texte anglais. Détermniné par
          le fait que le texte anglais a plus de 10 caractères et le tag
          ``display_en`` est activé
        """
        try:
            return (self.context.display_en and
                    (len(self.context.presentation_en.raw) > 10)
                    )
        except Exception:
            return False

    def getDates(self):
        """
        On obtient les dates si le behavior ``IStartEndDates`` est actif.
        
        :return: ``False`` si on ne peut obtenir une date, sinon, renvoie
          les dates début et fin sous forme de ``string`` pour affichage dans
          la vue.
        """
        try:
            start = self.context.start_date
            end = self.context.end_date
        except Exception:
            return False
        if (start is None) or (end is None):
            return False
        display_time = False
        try:
            display_time = self.context.display_time
        except Exception:
            pass
        start = self._date_fr(start, display_time=display_time)
        end = self._date_fr(end, display_time=display_time)
        return start + ' - ' + end

    def getOtherNews(self):
        """
        Méthode utilisée pour l'affichage des autres actus dans le cartouche
        à droite
        
        :return: une liste d'objets de type ``News Item``, triés par
          date de publication inversée. Le nombre max d'éléments est déterminé
          par la valeur ``max_news`` du controlpanel
        """
        portal = api.portal.get()
        founds = api.content.find(portal_type='News Item',
                                  path='/'.join(portal.getPhysicalPath()),
                                  depth=9,
                                  )
        news = []
        n_uuid = api.content.get_uuid(obj=self.context)
        for found in founds:
            n = found.getObject()
            if api.content.get_uuid(obj=n) != n_uuid:
                news.append(n)
        if len(news) == 0:
            return False
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.max_news'
        max_news = api.portal.get_registry_record(prefix)
        return sorted(news,
                      key=lambda obj: obj.effective(),
                      reverse=True)[:max_news]
