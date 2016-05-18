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

    def _getHomeObject(self,
                       registry_record,
                       obj_type,
                       effective=True):
        """
        @param registry_record:
        """
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.' + registry_record
        tag = api.portal.get_registry_record(prefix)
        portal = api.portal.get()
        founds = api.content.find(context=portal,
                                  portal_type=obj_type,
                                  state="published"
                                  )
        if len(founds) == 0:
            return False
        objs = []
        for found in founds:
            obj = found.getObject()
            state = api.content.get_state(obj)
            if (tag in obj.Subject()) and (state == 'published'):
                # if tag in obj.Subject():
                objs.append(obj)
        if len(objs) == 0:
            return False
        if effective:
            sortedObjs = sorted(objs,
                                key=lambda obj: obj.effective(),
                                reverse=True)
            return sortedObjs
        return objs

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
        homeThumbnails = self._getHomeObject(registry_record='tag_home',
                                             obj_type='Folder',
                                             effective=True)
        return homeThumbnails

    def getHomeNews(self):
        homeNews = self._getHomeObject(registry_record='tag_home',
                                       obj_type='News Item',
                                       effective=True)
        return homeNews

    def getAboutBgImage(self):
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.about_bg_image'
        bg_image = api.portal.get_registry_record(prefix)
        return bg_image

    def getAboutUsDocuments(self):
        reg = 'about_document_tag'
        aboutUsDocuments = self._getHomeObject(registry_record=reg,
                                               obj_type='Document',
                                               effective=True)
        if aboutUsDocuments:
            return aboutUsDocuments[:3]
        else:
            return False

    def getAboutClasses(self, nb):
        """
        les classes des items dependent du nombre de ceux-ci
        """
        base = "col-xs-12 col-sm-10 col-sm-offset-1 "
        classesAbout = []
        if nb == 1:
            classesAbout.append(base + "col-md-8 col-md-offset-2")
        if nb == 2:
            classesAbout.append(base + "col-md-5 col-md-offset-0")
            classesAbout.append(base + "col-md-5 col-md-offset-2")
        if nb == 3:
            classesAbout.append(base + "col-md-4 col-md-offset-0")
            classesAbout.append(classesAbout[0])
            classesAbout.append(classesAbout[0])
        return classesAbout
