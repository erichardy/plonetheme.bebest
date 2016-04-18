# -*- coding: utf-8 -*-

# import logging
from zope.publisher.browser import BrowserView
from plone import api


class bebestHome(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def getCarouselImages(self):
        context = self.context
        objs = []
        images = api.content.find(context=context['bebest-carousel'],
                                     depth=1,
                                     portal_type='Image')
        for image in images:
            objs.append(image.getObject())
        return objs

    def localText(self, obj):
        if obj.text:
            return obj.text.raw
        else:
            return "<p />"
