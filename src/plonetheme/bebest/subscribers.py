# -*- coding: utf-8 -*-
import logging
# from plone import api
# from plone.i18n.normalizer.interfaces import INormalizer
# from zope.component import getUtility


logger = logging.getLogger('plonetheme.bebest')


def setPortraitTitle(context, event):
    # normalizer = getUtility(INormalizer)
    context.title = context.family_name + '-' + context.first_name
    # context.id = normalizer.normalize(context.title)
    context.reindexObject()
