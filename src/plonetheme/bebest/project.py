# -*- coding: utf-8 -*-
"""
Nous auront besoin des references :
http://docs.plone.org/external/plone.app.dexterity/docs/advanced/references.html
pour associer un projet a des missions et des portraits.
"""

from plone.dexterity.content import Container
from plone.dexterity.browser import add
from plone.dexterity.browser import edit
from plone.app.textfield import RichText
from plone.autoform import directives
from plone.autoform.interfaces import IFormFieldProvider
# from plone.namedfile import field as namedfile
from plone.supermodel import model
# from plone.supermodel.directives import fieldset
# from z3c.form.browser.radio import RadioFieldWidget
from zope import schema
from z3c.form import button
from z3c.relationfield.schema import RelationChoice
from plone.namedfile.field import NamedBlobImage
# from z3c.relationfield.schema import RelationList
from plone.app.vocabularies.catalog import CatalogSource

from zope.interface import implements
from zope.interface import Invalid, invariant
from zope.interface import alsoProvides

from collective import dexteritytextindexer
from zope.publisher.browser import BrowserView
from plone import api
import json
# from plone.formwidget.contenttree import PathSourceBinder
# from plone.namedfile.field import NamedBlobImage
import logging
# import urllib
# import re
# from plonetheme.bebest.utils import CatalogSource
from plonetheme.bebest import _

logger = logging.getLogger('bebest PROJECT')

class StartBeforeEnd(Invalid):
    __doc__ = _(u"The start or end date is invalid")


class IProject(model.Schema):

    model.fieldset('general',
                   label=_(u"general"),
                   fields=['title',
                           'subtitle',
                           'categories',
                           'main_pict',
                           'pict_author',
                           ])
    dexteritytextindexer.searchable('title')
    title = schema.TextLine(title=_(u"mission label"),
                            required=True,
                            )
    dexteritytextindexer.searchable('subtitle')
    subtitle = schema.TextLine(title=_(u"very short description"),
                               required=False,
                               )
    dexteritytextindexer.searchable('categories')
    directives.widget(categories='z3c.form.browser.checkbox.CheckBoxFieldWidget')
    categories = schema.Set(title=_(u"project categories"),
                          description=_(u"select categories for this project"),
                          value_type=schema.Choice(
                                     vocabulary=u"bebest.projectcategories"),)
    main_pict = NamedBlobImage(title=_(u"main photo"),
                               required=False
                               )
    pict_author = schema.TextLine(title=_(u"picture author"),
                                  required=False,
                                  )
    #
    model.fieldset('descriptions',
                   label=_(u"project descriptions"),
                   fields=['descripton_fr',
                           'display_en',
                           'descripton_en'])
    descripton_fr = RichText(title=_(u"french description"),
                             required=False,
                             )
    display_en = schema.Bool(title=_(u"display or not english description"),
                             description=_(u"unselect to disable"),
                             default=True
                             )
    descripton_en = RichText(title=_(u"english description"),
                             required=False,
                             )
    #
    model.fieldset('dates',
                   label=_(u"dates"),
                   fields=['start_date',
                           'end_date',
                           ])
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
    #
    model.fieldset('geo',
                   label=_(u"geo"),
                   fields=['zoom',
                           'map_center',
                           ])
    zoom = schema.Int(title=_(u"zoom level"),
                             description=_(u"between 0 and 15"),
                             min=0,
                             max=15,
                             default=4,
                             required=False)
    map_center = schema.TextLine(title=_(u"map center"),
                                 description=_(u'must be in the form "[lat, long]"'),
                                 default=u'[48.40003249610685, -4.5263671875]',
                                 required=False,
                                 )
    #
    model.fieldset('contacts',
                   label=_(u"contacts"),
                   fields=['primary_contact',
                           'contact_fr',
                           'contact_ca'
                           ])
    # directives.widget(chief='plone.formwidget.contenttree.ContentTreeFieldWidget')

    primary_contact = RelationChoice(title=_(u"primary contact"),
                                     source=CatalogSource(portal_type="bebest.portrait"),)

    contact_fr = RelationChoice(title=_(u"french contact"),
                                source=CatalogSource(portal_type="bebest.portrait"),)
    contact_ca = RelationChoice(title=_(u"canadian contact"),
                                source=CatalogSource(portal_type="bebest.portrait"),)

    @invariant
    def validateStartEnd(data):
        if data.start_date is not None and data.end_date is not None:
            if data.start_date > data.end_date:
                msg = u"The start date must be before the end date."
                raise StartBeforeEnd(_(msg))

alsoProvides(IProject, IFormFieldProvider)


class AddForm(add.DefaultAddForm):
    portal_type = 'bebest.project'
    ignoreContext = True
    title = _(u"Add a new project !")

    def update(self):
        super(add.DefaultAddForm, self).update()

    def updateWidgets(self):
        super(add.DefaultAddForm, self).updateWidgets()

    @button.buttonAndHandler(_(u'Save this project'), name="save_this_project")
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

    @button.buttonAndHandler(_(u'Cancel this project'))
    def handleCancel(self, action):
        data, errors = self.extractData()
        # context is the thesis repo
        contextURL = self.context.absolute_url()
        self.request.response.redirect(contextURL)


class AddView(add.DefaultAddView):
    form = AddForm


class editForm(edit.DefaultEditForm):
    pass


class ProjectView(BrowserView):
    
    def getMissionsFeatures(self):
        context = self.context
        results = api.content.find(depth=1,
                                   portal_type='bebest.mission',
                                   path='/'.join(context.getPhysicalPath()))
        js = u'<script>'
        layers = u'\nvar overlayMaps = {'
        missionsFeatures = u'\nvar missionsFeatures = ['
        features = []
        for mission in results:
            m = mission.getObject()
            geo = m.geojson
            try:
                if len(geo) > 5:
                    uuid = u'N' + api.content.get_uuid(m)
                    missionJS = u'var '
                    missionJS += uuid
                    missionJS += u'=L.geoJson(' + m.geojson + u');'
                    js += missionJS
                    missionsFeatures += uuid + u','
                    layers += u"'"
                    layers += m.title + u"':" + uuid + u','
                    features.append(geo)
            except Exception:
                pass
        # logger.info(features)
        if len(features) == 0:
            return False
        missionsFeatures = missionsFeatures.strip(u',')
        missionsFeatures += u'];'
        layers = layers.strip(u',')
        layers += u'};'
        js += layers
        js += missionsFeatures
        js += u'</script>'
        # logger.info(layers)
        logger.info(js)
        return js

    def getMapZoom(self):
        zoomjs = '<script>var zoom = 4;</script>'
        try:
            zoom = self.context.zoom
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
            center = self.context.map_center
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


class project(Container):
    implements(IProject)
    pass
