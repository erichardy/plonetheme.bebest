# -*- coding: utf-8 -*-

import logging
from zope.publisher.browser import BrowserView
from plone import api

logger = logging.getLogger('bebest')

class bebestHome(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def getCarouselImages(self):
        context = self.context
        if context.portal_type != 'Folder':
            context = context.aq_parent
        objs = []
        try:
            images = api.content.find(context=context['bebest-carousel'],
                                  depth=1,
                                  portal_type='Image')
            for image in images:
                objs.append(image.getObject())
            # logger.info(len(images))
        except Exception:
            logger.info('0 images !')
        return objs

    def localText(self, obj):
        if obj.text:
            return obj.text.raw
        else:
            return "<p />"
