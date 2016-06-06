# -*- coding: utf-8 -*-

import logging
from zope.publisher.browser import BrowserView
# from operator import attrgetter
from plone import api

from plonetheme.bebest.utils import sort_by_position

logger = logging.getLogger('bebest')

"""
Fonctionnement du portfolio

Le portfolio est une vue d'un Folder.

Les folders ont un behavior ``leadimage`` et c'est cette image qui
est utilisée comme image principale, la première image du portfolio.

Les images qui apparaissent dans les vignettes rondes, sont celles qui
sont taggée avec le tag qui est défini par ``portfolio_author_tag``.
Par défaut, le mot clé est ``portfolio-author``

Les images qui apparaissent dans le portfolio sont les images qui ne sont pas
traggées avec le tag qui est défini par ``portfolio_author_tag``
(cf control panel)

Le texte est dans un document qui a pour id ``portfolio-text``. Il permet de
présenter du texte riche.

La couleur du background est donnée par un document qui a pour id
``portfolio-bg``.
Le contenu propre de ce document n'est pas pris en compte, seule la
description est utilisée. Dans cette description, doit apparaître le
nom d'une classe CSS définie dans les CSS. Par défault (si ce document
n'existe pas ou s'il n'y a rien dans la description),
la valeur par défaut est ``bg-dark``
"""


class portFolio(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def _getPortfolioObjs(self,
                          registry_record,
                          obj_type,
                          withtag=True,
                          effective=True):
        """
        @param registry_record:
        """
        context = self.context
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.' + registry_record
        tag = api.portal.get_registry_record(prefix)
        founds = api.content.find(context=self.context,
                                  portal_type=obj_type,
                                  path='/'.join(context.getPhysicalPath()),
                                  depth=1,
                                  )
        if len(founds) == 0:
            return False
        objs = []
        for found in founds:
            obj = found.getObject()
            if withtag:
                if (tag in obj.Subject()):
                    objs.append(obj)
            else:
                if (tag not in obj.Subject()):
                    objs.append(obj)
        if len(objs) == 0:
            return False
        if effective:
            sortedObjs = sorted(objs,
                                key=lambda obj: obj.effective(),
                                reverse=True)
            return sortedObjs
        return objs

    def getPorfolioBG(self):
        try:
            bgDoc = self.context['portfolio-bg']
            if bgDoc.portal_type != 'Document':
                return 'bg-dark'
        except Exception:
            return 'bg-dark'
        bg = bgDoc.description
        if bg:
            return bg
        else:
            return 'bg-dark'

    def getPortfolioAuthors(self):
        reg = 'portfolio_author_tag'
        authors = self._getPortfolioObjs(registry_record=reg,
                                         obj_type='Image',
                                         withtag=True,
                                         effective=True)
        sortedAuthors = sorted(authors, sort_by_position)
        return sortedAuthors

    def getPortfolioImages(self):
        reg = 'portfolio_author_tag'
        images = self._getPortfolioObjs(registry_record=reg,
                                        obj_type='Image',
                                        withtag=False,
                                        effective=True)
        sortedImages = sorted(images, sort_by_position)
        return sortedImages

    def getPorfolioText(self):
        try:
            doc = self.context['portfolio-text']
            if doc.portal_type != 'Document':
                return False
        except Exception:
            return False
        # import pdb;pdb.set_trace()
        return doc.text.raw
