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


class Map(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request
