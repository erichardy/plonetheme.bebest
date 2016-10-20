# -*- coding: utf-8 -*-

import logging
from zope.publisher.browser import BrowserView
# from operator import attrgetter
from plone import api

# from plonetheme.bebest.utils import sort_by_position

logger = logging.getLogger('bebest')


class bebestThumbsView(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def getObjs(self, effective=False):
        """
        :param effective: tri par date de publication
        :type effective: Boolean
        :return: liste des portraits triés par ordre alphabétique du nom,
          ou par ordre de date de publication. Pour les portraits,
          le tri se fait par ordre alphabétique du nom.
        """
        context = self.context
        founds = api.content.find(context=self.context,
                                  path='/'.join(context.getPhysicalPath()),
                                  depth=1,
                                  )
        if len(founds) == 0:
            return False
        objs = [found.getObject() for found in founds]
        if effective:
            sortedObjs = sorted(objs,
                                key=lambda obj: obj.effective(),
                                reverse=True)
            return sortedObjs
        return sorted(objs,
                      key=lambda obj: obj.Title(),
                      reverse=False)

    def getImageURL(self, obj):
        """
        :param obj: un objet quelconque
        :type obj: *
        :returns: l'URL de son image principage ou bien l'URL
            d'une image par défaut
        """
        URL = obj.absolute_url()
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.default_thumb'
        default_thumb = api.portal.get_registry_record(prefix)
        default_thumb_URL = URL + u'/' + default_thumb
        attrs = ['thumb_pict', 'main_pict', 'image']
        for attr in attrs:
            try:
                image = getattr(obj, attr)
                if image:
                    imageURL = URL + u'/@@download/' + attr + u'/'
                    imageURL += image.filename
                    return imageURL
                else:
                    return default_thumb_URL
            except Exception:
                pass
        return default_thumb_URL
