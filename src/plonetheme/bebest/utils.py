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
from zope.component import getUtility
from zope.schema.vocabulary import SimpleTerm, SimpleVocabulary
from OFS.interfaces import IOrderedContainer
from plone import api
from zope.interface import Invalid
# from plone import api
import os
from string import strip
import urllib
import geojson
import logging
from plonetheme.bebest import _

logger = logging.getLogger('bebest')


def getFolderish(obj):
    if IFolderish.providedBy(obj):
        return obj
    else:
        return getFolderish(obj.aq_parent)


def reverse_email(email):
    """return a transformed email string : nom.prenom@domaine.fr
       monerp_mon__rf_eniamod
    """
    # email = strip(email)
    try:
        email = strip(email)
        lemail = email.split('@')
    except:
        return 'on__liam'
    if len(lemail) < 2:
        return 'on__liam'
    user_email = lemail[0]
    domain = lemail[1]
    rev_user_email = ''
    rev_domain = ''
    for u in user_email.split('.'):
        uu = u[::-1]
        rev_user_email = rev_user_email + uu + '_'
    for d in domain.split('.'):
        dd = d[::-1]
        rev_domain = rev_domain + dd + '_'
    rev_domain = rev_domain[0:len(rev_domain) - 1]
    return rev_user_email + '_' + rev_domain

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
        # brains = []
        # catalog = getToolByName(context, 'portal_catalog')
        # brains = catalog({'portal_type': 'Folder'})
        # return CatalogVocabulary.fromItems(brains, context)
        return SimpleVocabulary([SimpleTerm(value='aaa',
                                            token='aaa',
                                            title='aaa')])


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


def getTitleFromVoc(vocabulary, value):
    """
    Utilitaire qui permet d'obtenir le
    libellé (``title``) d'une valeur d'un vocabulaire. Essentiellement destiné
    aux affichages dans les templates.

    :param vocabulary: nom du vocabulaire tel qu'il est défini en tant \
    qu'utilitaire
    :type vocabulary: string
    :param value: valeur pour laquelle on recherche un libellé (``title``)
    :type value: string
    :returns: une chaîne de caractères qui est le ``title`` correspondant à la
        valeur passée en paramètre pour le vocabulaire donné. Si la valeur
        n'existe pas dans le vocabulaire, retourne la valeur elle-même
        passée en paramètre.
    """
    portal = getSite()
    factory = getUtility(IVocabularyFactory, vocabulary)
    types_voc = factory(portal)
    try:
        term = types_voc.getTerm(value).title
    except:
        term = value
    return term


# from http://docs.plone.org/develop/plone/content/listing.html
def get_position_in_parent(obj):
    parent = obj.aq_inner.aq_parent
    ordered = IOrderedContainer(parent, None)
    if ordered is not None:
        return ordered.getObjectPosition(obj.getId())
    return 0


def sort_by_position(a, b):
    """
    Usage :
    sortedMyList = sorted(myList, sort_by_position)
    """
    return get_position_in_parent(a) - get_position_in_parent(b)


def getGalleryImages(context):
    c = context
    try:
        carousel = c['carousel']
        if api.content.get_state(carousel) != 'published':
            return False
    except Exception:
        return False
    founds = api.content.find(context=c,
                              portal_type='Image',
                              path='/'.join(carousel.getPhysicalPath())
                              )
    if len(founds) == 0:
        return False
    images = [i.getObject() for i in founds
              if api.content.get_state(i.getObject()) == 'published']
    return sorted(images, sort_by_position)


def validateURL(url):
    # import pdb;pdb.set_trace()
    try:
        urllib.urlopen(url)
        return True
    except Exception:
        raise Invalid(_(u"Invalid URL"))


def isPublished(obj):
    return api.content.get_state(obj.getObject()) == 'published'


def getMissionsFeatures(results):
    js = u'<script>'
    missionsUUID = []
    featuresCollections = {}
    # import pdb;pdb.set_trace()
    for mission in results:
        m = mission
        uuid = 'F' + api.content.get_uuid(m)
        # la liste des uuid des missions
        missionsUUID.append(uuid)
        geo = geojson.loads(m.geojson)
        # ici, on peut modifier les parametres des geojson des missions
        # i.e. : ajouter des proprietes...
        # ....
        for f in geo['features']:
            name = f['properties'].get('name')
            if name:
                f['properties']['name'] = name
            else:
                f['properties']['name'] = m.title
            description = f['properties'].get('description')
            desc_plus = u'Mission : ' + m.title
            if description:
                desc = description + u'<br />' + desc_plus
                f['properties']['description'] = desc
            else:
                f['properties']['description'] = desc_plus
            url = m.absolute_url()
            f['properties']['url'] = url
        geo['name'] = m.title
        featuresCollections[uuid] = geo

    if len(featuresCollections.keys()) == 0:
        return False
    # on genere un tableau javascript qui contient les uuid des missions
    uuids = u'var uuids = ['
    for uuid in missionsUUID:
        uuids += u"'" + uuid + u"',"
    uuids = uuids.strip(u',')
    uuids += u'];\n\n'
    # logger.info(uuids)
    js += uuids
    for uuid in featuresCollections.keys():
        fjs = u'\n var ' + uuid + u' = '
        fjs += geojson.dumps(featuresCollections[uuid])
        fjs += u';\n'
        js += fjs
    js += u"\n\n"
    fjs += u'var featuresCollections = ['
    for uuid in missionsUUID:
        fjs += geojson.dumps(featuresCollections[uuid]) + u','
    fjs = fjs.strip(u',')
    fjs += u'];\n'
    js += fjs
    js += u'</script>'
    return js


class debug(object):
    def __call__(self):
        import pdb
        pdb.set_trace()
