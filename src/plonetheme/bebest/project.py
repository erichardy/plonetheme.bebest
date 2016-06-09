# -*- coding: utf-8 -*-
"""
Nous auront besoin des references :
http://docs.plone.org/external/plone.app.dexterity/docs/advanced/references.html
pour associer un projet a des missions et des portraits.
"""

from plone.dexterity.content import Container
from plone.dexterity.browser import add
# from plone.dexterity.browser import edit
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
from z3c.relationfield.schema import RelationList
from plone.app.vocabularies.catalog import CatalogSource as CS

from zope.interface import implements
from zope.interface import Invalid, invariant
from zope.interface import alsoProvides

from collective import dexteritytextindexer
from zope.publisher.browser import BrowserView
from plone import api
# from plone.formwidget.contenttree import PathSourceBinder
# from plone.namedfile.field import NamedBlobImage
import logging
# import urllib
# import re
from plonetheme.bebest.utils import getTitleFromVoc
from plonetheme.bebest import _

logger = logging.getLogger('bebest PROJECT')
CheckBoxFieldWidget = 'z3c.form.browser.checkbox.CheckBoxFieldWidget'


class StartBeforeEnd(Invalid):
    __doc__ = _(u"The start or end date is invalid")


class IProject(model.Schema):

    model.fieldset('general',
                   label=_(u"general"),
                   fields=['title',
                           'description',
                           'categories',
                           'main_pict',
                           'pict_author',
                           ])
    dexteritytextindexer.searchable('title')
    title = schema.TextLine(title=_(u"project label"),
                            required=True,
                            )
    dexteritytextindexer.searchable('description')
    description = schema.TextLine(title=_(u"very short description"),
                                  required=True,
                                  )
    dexteritytextindexer.searchable('categories')
    directives.widget(
        categories='z3c.form.browser.checkbox.CheckBoxFieldWidget')
    categories = schema.Set(
        title=_(u"project categories"),
        description=_(u"select one or more"),
        value_type=schema.Choice(
            vocabulary=u"bebest.projectcategories"),
        )
    main_pict = NamedBlobImage(title=_(u"main photo"),
                               required=True
                               )
    pict_author = schema.TextLine(title=_(u"picture author"),
                                  required=False,
                                  )
    #
    model.fieldset('descriptions',
                   label=_(u"project descriptions"),
                   fields=['description_fr',
                           'display_en',
                           'description_en'])
    description_fr = RichText(title=_(u"french description"),
                              required=False,
                              )
    display_en = schema.Bool(title=_(u"display or not english description"),
                             description=_(u"unselect to disable"),
                             default=True
                             )
    description_en = RichText(title=_(u"english description"),
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
    map_center = schema.TextLine(
        title=_(u"map center"),
        description=_(u'must be in the form "[lat, long]"'),
        default=u'[48.40003249610685, -4.5263671875]',
        required=False,
        )
    #
    model.fieldset('contacts',
                   label=_(u"contacts"),
                   fields=['primary_contact',
                           'contact_fr',
                           'contact_ca',
                           'other'
                           ])
    # directives.widget(chief='plone.formwidget.contenttree.ContentTreeFieldWidget')

    primary_contact = RelationChoice(
        title=_(u"primary contact"),
        source=CS(portal_type="bebest.portrait"),
        )

    contact_fr = RelationChoice(
        title=_(u"french contact"),
        source=CS(portal_type="bebest.portrait"),
        )
    contact_ca = RelationChoice(
        title=_(u"canadian contact"),
        source=CS(portal_type="bebest.portrait"),
        )
    other = RelationList(title=_(u"other participants"),
                         value_type=RelationChoice(
                             title=_(u'Target'),
                             source=CS(portal_type="bebest.portrait")),
                         required=False,
                         )

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
            logger.info(obj.absolute_url())
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


"""
class editForm(edit.DefaultEditForm):
    pass
"""


class ProjectView(BrowserView):
    pass


class project(Container):
    implements(IProject)

    def getPrimaryContact(self):
        return self.primary_contact.to_object

    def getContactFR(self):
        return self.contact_fr.to_object

    def getContactCA(self):
        return self.contact_ca.to_object

    def getMissions(self):
        bmissions = api.content.find(portal_type='bebest.mission',
                                     path='/'.join(self.getPhysicalPath()),
                                     depth=1,
                                     )
        return [mission.getObject() for mission in bmissions]

    def sort_by_title(self, a, b):
        a_name = a.family_name + ' ' + a.first_name
        b_name = b.family_name + ' ' + b.first_name
        if a_name < b_name:
            return -1
        return 1

    def getMissionsTeams(self):
        """
        :returns: la liste de tous les participants à toutes les missions,
          par ordre alpabétique et épurée des doublons (à faire!)
        """
        missions = self.getMissions()
        if len(missions) == 0:
            return False
        p = []
        for mission in missions:
            p.append(mission.getChief())
            team = mission.getTeam()
            if team:
                p += team
        participants = []
        for participant in p:
            if participant not in participants:
                participants.append(participant)
        return sorted(participants, self.sort_by_title)

    def getDescriptionFR(self):
        if len(self.descripton_fr) < 5:
            return '<p>&nbsp;</p>'

    def getDescriptionEN(self):
        if len(self.descripton_en) < 5:
            return '<p>&nbsp;</p>'

    def getProjectCategories(self):
        voc = "bebest.projectcategories"
        c = self
        clist = [getTitleFromVoc(voc, category) for category in c.categories]
        cat = [ctg + '<br />' for ctg in clist
               if ctg != clist[-1]]
        cat.append(clist[-1])
        return ''.join(cat)

    def _toHTML(self, ch):
        s = ch.replace("'", "&rsquo;").\
            replace('"', "&rdquo;")
        return s

    def getMissionsFeatures(self):
        context = self
        results = api.content.find(depth=1,
                                   portal_type='bebest.mission',
                                   path='/'.join(context.getPhysicalPath()))
        js = u'<script>'
        missionsNames = u'\nvar missionsNames = ['
        missionsUUID = u'\nvar missionsUUID = ['
        missionsFeatures = u'\nvar missionsFeatures = ['
        missionsURL = u'\nvar missionsURL = ['
        missionsSubtitle = u'\nvar missionsSubtitle = ['
        features = []
        for mission in results:
            m = mission.getObject()
            geo = m.geojson
            try:
                if len(geo) > 5:
                    title = self._toHTML(m.title)
                    subtitle = self._toHTML(m.description)
                    uuid = u'N' + api.content.get_uuid(m)
                    missionJS = u'\nvar '
                    missionJS += uuid
                    missionJS += u'=' + unicode(m.geojson, "UTF-8") + u';'
                    js += missionJS
                    missionsFeatures += uuid + u','
                    missionsNames += u"'" + title + u"',"
                    missionsSubtitle += u"'" + subtitle + u"',"
                    missionsUUID += u"'" + uuid + u"',"
                    missionsURL += u"'" + m.absolute_url() + u"',"
                    features.append(geo)
            except Exception:
                pass
        # logger.info(features)
        if len(features) == 0:
            return False
        missionsFeatures = missionsFeatures.strip(u',')
        missionsFeatures += u'];'
        missionsNames = missionsNames.strip(u',')
        missionsNames += u'];'
        missionsSubtitle = missionsSubtitle.strip(u',')
        missionsSubtitle += u'];'
        missionsUUID = missionsUUID.strip(u',')
        missionsUUID += u'];'
        missionsURL = missionsURL.strip(u',')
        missionsURL += u'];'
        js += missionsNames
        js += missionsSubtitle
        js += missionsUUID
        js += missionsFeatures
        js += missionsURL
        js += u'</script>'
        # logger.info(layers)
        # logger.info(js)
        return js

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
