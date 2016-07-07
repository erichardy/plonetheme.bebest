# -*- coding: utf-8 -*-

import logging
from zope.publisher.browser import BrowserView
# from operator import attrgetter
# from plone import api

logger = logging.getLogger('bebest')


class bebestPageView(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def displayEN(self):
        """
        :return: la valeur booléene contenue dans l'attribut ``display_en``
          qui permet de choisir d'afficher la version anglaise du texte.
        """
        return self.context.display_en

    def istextFR(self):
        """
        :return: on considère que le texte est présent s'il contient un minimum
          de caratères... Renvoit ``True`` dans ce cas, sinon ``False``
        """
        try:
            return len(self.context.text.raw) > 4
        except Exception:
            return False

    def istextEN(self):
        """
        :return: on considère que le texte est présent s'il contient un minimum
          de caratères... Renvoit ``True`` dans ce cas, sinon ``False``
        """
        try:
            return len(self.context.presentation_en.raw) > 4
        except Exception:
            return False
