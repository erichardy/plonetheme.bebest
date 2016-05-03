# -*- coding: utf-8 -*-

import logging
from zope.publisher.browser import BrowserView
# from operator import attrgetter
from plone import api
from OFS.interfaces import IOrderedContainer

logger = logging.getLogger('bebest')


# from http://docs.plone.org/develop/plone/content/listing.html
def get_position_in_parent(obj):
    parent = obj.aq_inner.aq_parent
    ordered = IOrderedContainer(parent, None)
    if ordered is not None:
        return ordered.getObjectPosition(obj.getId())
    return 0


def sort_by_position(a, b):
    return get_position_in_parent(a) - get_position_in_parent(b)
#


class portFolio(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def _getPortfolioObjs(self,
                          registry_record,
                          obj_type,
                          withtag=True,
                          effective=True):
        """
        @param registry_record:
        """
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.' + registry_record
        tag = api.portal.get_registry_record(prefix)
        founds = api.content.find(context=self.context,
                                  portal_type=obj_type,
                                  depth=1,
                                  )
        if len(founds) == 0:
            return False
        objs = []
        for found in founds:
            obj = found.getObject()
            if withtag:
                if (tag in obj.Subject()):
                    objs.append(obj)
            else:
                if (tag not in obj.Subject()):
                    objs.append(obj)
        if len(objs) == 0:
            return False
        if effective:
            sortedObjs = sorted(objs,
                                key=lambda obj: obj.effective(),
                                reverse=True)
            return sortedObjs
        return objs

    def getPortfolioAuthors(self):
        reg = 'portfolio_author_tag'
        authors = self._getPortfolioObjs(registry_record=reg,
                                         obj_type='Image',
                                         withtag=True,
                                         effective=True)
        sortedAuthors = sorted(authors, sort_by_position)
        return sortedAuthors

    def getPortfolioImages(self):
        reg = 'portfolio_author_tag'
        images = self._getPortfolioObjs(registry_record=reg,
                                        obj_type='Image',
                                        withtag=False,
                                        effective=True)
        sortedImages = sorted(images, sort_by_position)
        return sortedImages
