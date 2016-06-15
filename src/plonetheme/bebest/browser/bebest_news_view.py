# -*- coding: utf-8 -*-

import logging
from zope.publisher.browser import BrowserView
# from operator import attrgetter
# from plone import api

logger = logging.getLogger('bebest')


class bebestNewsView(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request
