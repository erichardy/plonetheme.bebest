# -*- coding: utf-8 -*-

import logging
from zope.publisher.browser import BrowserView
# from operator import attrgetter
from plone import api

logger = logging.getLogger('bebest')


class bebestPageView(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def displayEN(self):
        return self.context.display_en

    def istextFR(self):
        try:
            return len(self.context.text.raw) > 4
        except Exception:
            return False

    def istextEN(self):
        try:
            return len(self.context.presentation_en.raw) > 4
        except Exception:
            return False
