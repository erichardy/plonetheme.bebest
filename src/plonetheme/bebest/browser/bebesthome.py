# -*- coding: utf-8 -*-

import logging
from zope.publisher.browser import BrowserView
from plone import api

logger = logging.getLogger('bebest')


class bebestHome(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def getCarouselText(self):
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.carousel_label'
        label = api.portal.get_registry_record(prefix)
        return label

    def getCarouselLogoName(self):
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.logo_name'
        logo_name = api.portal.get_registry_record(prefix)
        return logo_name

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
