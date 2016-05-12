# -*- coding: utf-8 -*-
"""
Nous auront besoin des references :
http://docs.plone.org/external/plone.app.dexterity/docs/advanced/references.html
pour associer un projet a des missions et des portraits.
"""

from plone.dexterity.content import Container
from plone.dexterity.browser import add
from plone.app.textfield import RichText
# from plone.autoform import directives
from plone.autoform.interfaces import IFormFieldProvider
# from plone.namedfile import field as namedfile
from plone.supermodel import model
# from plone.supermodel.directives import fieldset
# from z3c.form.browser.radio import RadioFieldWidget
from zope import schema
from z3c.relationfield.schema import RelationChoice
from z3c.relationfield.schema import RelationList
from z3c.form import button
from plone.app.vocabularies.catalog import CatalogSource

from zope.interface import implements
from zope.interface import Invalid, invariant
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
# from plonetheme.bebest.utils import CatalogSource

from plonetheme.bebest import _

logger = logging.getLogger('bebest MISSIONS')


class StartBeforeEnd(Invalid):
    __doc__ = _(u"The start or end date is invalid")


def validateCoord(coord):
    try:
        float(coord)
        return True
    except Exception:
        raise Invalid(_(u"Not a float number"))


class IMission(model.Schema):

    model.fieldset('general',
                   label=_(u"general"),
                   fields=['title',
                           'subtitle',
                           'start_date',
                           'end_date',
                           ])
    dexteritytextindexer.searchable('title')
    title = schema.TextLine(title=_(u"mission label"),
                            required=True,
                            )
    dexteritytextindexer.searchable('subtitle')
    subtitle = schema.TextLine(title=_(u"very short description"),
                               required=False,
                               )
    dexteritytextindexer.searchable('start_date')
    start_date = schema.Date(title=_(u"start date for the mission"),
                             description=_(u""),
                             required=False,
                             )
    dexteritytextindexer.searchable('end_date')
    end_date = schema.Date(title=_(u"end date for the mission"),
                           description=_(u""),
                           required=False,
                           )
    model.fieldset('descriptions',
                   label=_(u"descriptions"),
                   fields=['presentation',
                           'display_en',
                           'presentation_en',
                           'main_pict',
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
                   fields=['geometry',
                           'coordinates',
                           'geojson',
                           ])
    dexteritytextindexer.searchable('geometry')
    geometry = schema.Choice(title=_(u"type of coordinates"),
                             description=_(u"Point, MultiPoint, etc..."),
                             vocabulary="bebest.geometry_types",
                             default="point",
                             required=False)
    dexteritytextindexer.searchable('coordinates')
    coordinates = schema.List(title=_(u"coordinates"),
                              description=_(u"MUST match geometry type !"),
                              value_type=schema.TextLine(),
                              required=False,
                              )
    geojson = schema.Text(title=_(u"coordinates in GEOJSON format"),
                          description=_(u"Use http://geojson.io/"),
                          required=False)
    model.fieldset('participants',
                   label=_(u"participants"),
                   fields=['chief',
                           'other',
                           ])
    chief = RelationChoice(title=_(u"chief scientist"),
                           source=CatalogSource(portal_type="bebest.portrait"),
                           required=False,
                           )
    other = RelationList(title=_(u"other participants"),
                         value_type=RelationChoice(
                                      title=_(u'Target'),
                                      source=CatalogSource(portal_type="bebest.portrait")),
                         required=False,
                         )

    @invariant
    def validateStartEnd(data):
        if data.start_date is not None and data.end_date is not None:
            if data.start_date > data.end_date:
                msg = u"The start date must be before the end date."
                raise StartBeforeEnd(_(msg))

alsoProvides(IMission, IFormFieldProvider)


class AddForm(add.DefaultAddForm):
    portal_type = 'bebest.mission'
    ignoreContext = True
    title = _(u"Add a new mission !")

    def update(self):
        super(add.DefaultAddForm, self).update()
        # logger.info('in update')
        # logger.info(self.context)

    def updateWidgets(self):
        super(add.DefaultAddForm, self).updateWidgets()
        # logger.info(self.context)

    @button.buttonAndHandler(_(u'Save this mission'), name="save_this_mission")
    def handleApply(self, action):
        data, errors = self.extractData()
        if errors:
            self.status = _("Please correct errors")
            return
        try:
            obj = self.createAndAdd(data)
            contextURL = self.context.absolute_url()
            self.request.response.redirect(contextURL)
        except Exception:
            raise

    @button.buttonAndHandler(_(u'Cancel this mission'))
    def handleCancel(self, action):
        data, errors = self.extractData()
        # context is the thesis repo
        contextURL = self.context.absolute_url()
        self.request.response.redirect(contextURL)


class AddView(add.DefaultAddView):
    form = AddForm


class MissionView(BrowserView):

    def getGeoJSON(self):
        geo = self.context.geojson
        if len(geo) > 5:
            geojson = "<script>var features = "
            geojson += self.context.geojson
            geojson += ";</script>"
            return geojson
        else:
            return False


class mission(Container):
    implements(IMission)
    pass
