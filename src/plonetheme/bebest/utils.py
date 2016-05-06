# -*- coding: utf-8 -*-

from plone.app.layout.navigation.root import getNavigationRootObject
from plone.app.querystring import queryparser
from zope.schema.interfaces import IVocabularyFactory
from plone.app.vocabularies.catalog import CatalogVocabulary

from zope.schema.interfaces import ISource
from zope.interface import implementer
from zope.site.hooks import getSite
from plone.uuid.interfaces import IUUID
from Products.CMFCore.interfaces import IFolderish
# from zope.schema.interfaces import IContextSourceBinder
from Products.CMFCore.utils import getToolByName
from zope.schema.vocabulary import SimpleTerm, SimpleVocabulary
# from plone import api
import os
import logging

logger = logging.getLogger('bebest')


def getFolderish(obj):
    if IFolderish.providedBy(obj):
        return obj
    else:
        return getFolderish(obj.aq_parent)

"""
plone.app.vocabularies.Catalog from plone.app.vocabularies-2.2.3-py2.7.egg
configure.zcml :
<utility
    factory=".catalog.CatalogVocabularyFactory"
    name="plone.app.vocabularies.Catalog"
    />
"""
@implementer(IVocabularyFactory)
class ProjectPortraitsVocabularyFactory(object):
    def __call__(self, context):
        logger.info('-=-=-=-=-=-')
        logger.info(context)
        # logger.info(self.aq_parent(request['PUBLISHED']))
        logger.info('-=-=-=-=-=-')
        # import pdb;pdb.set_trace()
        
        brains = []
        catalog = getToolByName(context, 'portal_catalog')
        brains = catalog({'portal_type': 'Folder'})
        # return CatalogVocabulary.fromItems(brains, context)
        return SimpleVocabulary([SimpleTerm(value='aaa', token='aaa', title='aaa')])


@implementer(IVocabularyFactory)
class CatalogVocabularyFactory(object):

    def __call__(self, context, query=None):
        parsed = {}
        if query:
            parsed = queryparser.parseFormquery(context, query['criteria'])
            if 'sort_on' in query:
                parsed['sort_on'] = query['sort_on']
            if 'sort_order' in query:
                parsed['sort_order'] = str(query['sort_order'])
        try:
            catalog = getToolByName(context, 'portal_catalog')
        except AttributeError:
            context = getSite()
            catalog = getToolByName(context, 'portal_catalog')

        # If no path is specified check if we are in a sub-site and use that
        # as the path root for catalog searches
        if 'path' not in parsed:
            portal = getToolByName(context, 'portal_url').getPortalObject()
            nav_root = getNavigationRootObject(context, portal)
            if nav_root.getPhysicalPath() != portal.getPhysicalPath():
                parsed['path'] = {
                    'query': '/'.join(nav_root.getPhysicalPath()),
                    'depth': -1
                }
        brains = catalog(**parsed)
        """ """
        returned = CatalogVocabulary.fromItems(brains, context)
        return returned
        """ """
        # return CatalogVocabulary.fromItems(brains, context)


"""
[21] > /Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/utils.py(58)\
__call__()
-> return returned
(Pdb++) returned
<plone.app.vocabularies.catalog.CatalogVocabulary object at 0x10ac59710>
(Pdb++) ret = returned[0]
(Pdb++) ret
<zope.schema.vocabulary.SimpleTerm object at 0x10bfa37d0>
(Pdb++) ret.title
'8417c14bbd9e4260bbb4352034bee0ec'
(Pdb++) ret.token
'8417c14bbd9e4260bbb4352034bee0ec'
(Pdb++) ret.value
<Products.ZCatalog.Catalog.mybrains object at 0x108288c18>
(Pdb++) ret.value.getObject().title
u'Plonetheme Bebest2'
Construire un vocabulaire qui contient :
title = token = UUID
value = brain
"""


@implementer(IVocabularyFactory)
class AllPortraitsVocabularyFactory(object):

    def __call__(self, context, query=None):
        # logger.info('++++')
        # logger.info(context)
        parsed = {}
        query = {}
        query['sort_on'] = u'sortable_title'
        query['sort_order'] = 'ascending'
        query['portal_type'] = u"bebest.portrait"
        query['depth'] = 0
        try:
            catalog = getToolByName(context, 'portal_catalog')
        except AttributeError:
            context = getSite()
            catalog = getToolByName(context, 'portal_catalog')

        if 'path' not in parsed:
            portal = getToolByName(context, 'portal_url').getPortalObject()
            nav_root = getNavigationRootObject(context, portal)
            if nav_root.getPhysicalPath() != portal.getPhysicalPath():
                parsed['path'] = {
                    'query': '/'.join(nav_root.getPhysicalPath()),
                    'depth': -1
                }
        brains = catalog(**query)
        """ """
        returned = CatalogVocabulary.fromItems(brains, context)
        return returned


# code from plone.app.vocabularies-2.2.3-py2.7.egg : catalog.py
@implementer(ISource)
class CatalogSource(object):
    """Catalog source for use with Choice fields.

    When instantiating the source, you can pass keyword arguments
    which will become the catalog query used to find terms.

    e.g.:

      image = Choice(
          title=u'Image',
          source=CatalogSource(portal_type='Image'),
          )

    The `__contains__` method is used during validation to
    make sure the selected item is found with the specified query.

    The `search_catalog` method is used by plone.app.widgets
    to retrieve catalog brains for this source's query augmented by
    input from the user interacting with the widget.
    """

    def __init__(self, context=None, **query):
        self.query = query

    def __contains__(self, value):
        if isinstance(value, basestring):
            uid = value
        else:
            uid = IUUID(value)
        if uid[0] == '/':
            # it is a path query
            site = getSite()
            site_path = '/'.join(site.getPhysicalPath())
            path = os.path.join(site_path, uid.lstrip('/'))
            if self.search_catalog({'path': {'query': path, 'depth': 0}}):
                return True
        else:
            if self.search_catalog({'UID': uid}):
                return True

    def search_catalog(self, user_query):
        query = user_query.copy()
        query.update(self.query)
        catalog = getToolByName(getSite(), 'portal_catalog')
        # {'sort_on': u'sortable_title', 'sort_order': 'ascending'}
        return catalog(query)


class debug(object):
    def __call__(self):
        import pdb
        pdb.set_trace()
