# -*- coding: utf-8 -*-

import logging
from zope.publisher.browser import BrowserView
# from operator import attrgetter
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

    def getCarouselInterval(self):
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.carousel_interval'
        interval = api.portal.get_registry_record(prefix)
        return interval

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
        # logger.info(str(len(objs)) + ' images dans le carousel')
        if len(objs) == 0:
            return False
        return objs

    def localText(self, obj):
        if obj.text:
            return obj.text.raw
        else:
            return "<p />"

    def getCarouselThumbnails(self):
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.tag_home'
        tag = api.portal.get_registry_record(prefix)
        portal = api.portal.get()
        founds = api.content.find(context=portal,
                                  portal_type='Folder',
                                  )
        thumbs = []
        for found in founds:
            thumb = found.getObject()
            if tag in thumb.Subject():
                thumbs.append(thumb)
        if len(thumbs) == 0:
            return False
        return thumbs

    def getHomeNews(self):
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.tag_home'
        tag = api.portal.get_registry_record(prefix)
        portal = api.portal.get()
        founds = api.content.find(context=portal,
                                  portal_type='News Item',
                                  )

        if len(founds) == 0:
            return False
        newsItems = []
        for found in founds:
            newsItem = found.getObject()
            if tag in newsItem.Subject():
                newsItems.append(newsItem)
        newsSorted = sorted(newsItems,
                            key=lambda newsitem: newsitem.effective(),
                            reverse=True)
        """
        for n in newsItems:
            logger.info(n.effective())
        for n in newsSorted:
            logger.info(n.effective())
        """
        return newsSorted

    def getAboutBgImage(self):
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.about_bg_image'
        bg_image = api.portal.get_registry_record(prefix)
        return bg_image
