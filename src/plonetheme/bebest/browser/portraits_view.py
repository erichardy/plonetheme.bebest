# -*- coding: utf-8 -*-

import logging
from zope.publisher.browser import BrowserView
# from operator import attrgetter
from plone import api

from plonetheme.bebest.utils import sort_by_position

logger = logging.getLogger('bebest')


class portraitsView(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def getPortraitssObjs(self,
                          effective=False):
        """
        @param effective: tri par date de publication
        """
        context = self.context
        founds = api.content.find(context=self.context,
                                  portal_type='bebest.portrait',
                                  path='/'.join(context.getPhysicalPath()),
                                  depth=1,
                                  )
        if len(founds) == 0:
            return False
        objs = [found.getObjects() for found in founds]
        if effective:
            sortedObjs = sorted(objs,
                                key=lambda obj: obj.effective(),
                                reverse=True)
            return sortedObjs
        return sorted(objs,
                      key=lambda obj: obj.Title(),
                      reverse=False)
