# -*- coding: utf-8 -*-

# import logging
from zope.publisher.browser import BrowserView
from plone import api


class bebestHome(BrowserView):

    def getCarousselImages(self):
        context = self.context
        objs = []
        images = api.content.find(context=context.aq_parent,
                                     depth=1,
                                     portal_type='Image')
        for image in images:
            if image.getObject().getId() != context.getId():
                objs.append(image.getObject())
        return objs

    def text(self, obj):
        if obj.text:
            return obj.text.raw
        else:
            return "<p />"
