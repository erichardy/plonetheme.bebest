# -*- coding: utf-8 -*-
"""
Nous auront besoin des references :
http://docs.plone.org/external/plone.app.dexterity/docs/advanced/references.html
pour associer un projet a des missions et des portraits.
"""

from plone.dexterity.content import Container
# from plone.dexterity.browser import add
# from plone.dexterity.browser import edit
# from plone.app.textfield import RichText
# from plone import api
# from plone.autoform import directives
from plone.autoform.interfaces import IFormFieldProvider
# from plone.namedfile import field as namedfile
from plone.supermodel import model
# from plone.supermodel.directives import fieldset
# from z3c.form.browser.radio import RadioFieldWidget
from zope import schema
from z3c.relationfield.schema import RelationChoice
from z3c.relationfield.schema import RelationList
# from z3c.form import button
from plone.app.vocabularies.catalog import CatalogSource as CS

from zope.interface import implements
# from zope.interface import Invalid, invariant
from zope.interface import alsoProvides

from zope.publisher.browser import BrowserView
from collective import dexteritytextindexer
# from plone.formwidget.contenttree import ObjPathSourceBinder
# from plone.formwidget.contenttree.source import PathSource
# from Products.CMFCore.interfaces import IFolderish
# from plone.formwidget.contenttree import PathSourceBinder
# from plone.formwidget.contenttree import ContentTreeFieldWidget
# from plone.formwidget.contenttree import MultiContentTreeFieldWidget
from plone.namedfile.field import NamedBlobImage, NamedBlobFile
import logging
# import urllib
# import re
from plonetheme.bebest.utils import getGalleryImages as ggi
from plonetheme.bebest import _

logger = logging.getLogger('bebest STUDYSITE')


class IStudysite(model.Schema):

    model.fieldset('general',
                   label=_(u"general"),
                   fields=['title',
                           'description',
                           'missions'
                           ])
    dexteritytextindexer.searchable('title')
    title = schema.TextLine(title=_(u"mission label"),
                            required=True,
                            )
    dexteritytextindexer.searchable('description')
    description = schema.TextLine(title=_(u"very short description"),
                                  required=True,
                                  )
    missions = RelationList(title=_(u"related missions"),
        value_type=RelationChoice(
                    title=_(u'Target'),
                    source=CS(portal_type="bebest.mission")),
                    required=False,
                    )


    model.fieldset('descriptions',
                   label=_(u"descriptions"),
                   fields=['presentation',
                           'display_en',
                           'presentation_en',
                           'main_pict',
                           'pict_author',
                           'doc'])
    dexteritytextindexer.searchable('presentation')
    presentation = RichText(title=_(u"Presentation"),
                            description=_(u"Mission presentation"),
                            required=False
                            )
    display_en = schema.Bool(title=_(u"display english description"),
                             description=_(u"unselect to disable"),
                             default=True
                             )

    presentation_en = RichText(title=_(u"Presentation"),
                               description=_(u"Mission presentation"),
                               required=False
                               )
    main_pict = NamedBlobImage(title=_(u"main photo"),
                               required=False
                               )
    pict_author = schema.TextLine(title=_(u"picture author"),
                                  required=False,
                                  )
    doc = NamedBlobFile(title=_(u"other document"),
                        description=_(u"downloaded by visitors"),
                        required=False)

    """
    tools to get coordinates :
    http://www.birdtheme.org/useful/v3tool.html
    http://www.latlong.net/
    http://codepen.io/jhawes/pen/ujdgK
    http://stackoverflow.com/questions/5072059/polygon-drawing-and-getting-\
    coordinates-with-google-map-api-v3
    charger un kml/gps/geojson dans leaflet :
    http://www.d3noob.org/2014/02/load-kml-gpx-or-geojson-traces-into.html
    """
    model.fieldset('geo',
                   label=_(u"geo"),
                   fields=['zoom',
                           'map_center',
                           'geojson',
                           ])
    zoom = schema.Int(title=_(u"zoom level"),
                      description=_(u"between 0 and 15"),
                      min=0,
                      max=15,
                      default=4,
                      required=False)
    map_center = schema.TextLine(title=_(u"map center"),
                                 description=_(u'in the form "[lat, long]"'),
                                 default=u'[48.40003249610685, -4.5263671875]',
                                 required=False,
                                 )
    geojson = schema.Text(title=_(u"coordinates in GEOJSON format"),
                          description=_(u"Use http://geojson.io/"),
                          required=False)

alsoProvides(IStudysite, IFormFieldProvider)


class StudySiteView(BrowserView):
    pass


class studysite(Container):
    implements(IStudysite)

    def getMapZoom(self):
        zoomjs = '<script>var zoom = 4;</script>'
        try:
            zoom = self.zoom
            if zoom:
                zoomjs = '<script>var zoom = ' + str(zoom) + ";</script>"
                return zoomjs
            else:
                return zoomjs
        except Exception:
            return zoomjs

    def getMapCenter(self):
        center_a = '<script>var center = '
        center_b = ';</script>'
        val = ' [48.40003249610685, -4.5263671875] '
        default = center_a + val + center_b
        try:
            center = self.map_center
            if center:
                testval = eval(center)
                if len(testval) != 2:
                    return default
                val0 = (isinstance(testval[0], int)
                        or
                        isinstance(testval[0], float))
                val1 = (isinstance(testval[1], int)
                        or
                        isinstance(testval[1], float))
                if (not val0) or (not val1):
                    return default
                return center_a + center + center_b
        except Exception:
            return default

    def getGeoJSON(self):
        geo = self.geojson
        try:
            if len(geo) > 5:
                geojson = "<script>var features = "
                geojson += self.geojson
                geojson += ";</script>"
                return geojson
            else:
                return False
        except Exception:
            return False

    def getPictAuthor(self):
        if not self.pict_author:
            return False
        return self.pict_author

    def displayEN(self):
        return self.display_en

    def getGalleryImages(self):
        return ggi(self)

    def getTextFR(self):
        try:
            if len(self.presentation.raw) < 6:
                logger.info('inf a 6')
                return False
            else:
                return self.presentation.raw
        except Exception:
            logger.info('excepppppp')
            return False

    def getTextEN(self):
        try:
            if len(self.presentation_en.raw) < 6:
                return False
            else:
                return self.presentation_en.raw
        except Exception:
            return False
