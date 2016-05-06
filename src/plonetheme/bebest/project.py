# -*- coding: utf-8 -*-
"""
Nous auront besoin des references :
http://docs.plone.org/external/plone.app.dexterity/docs/advanced/references.html
pour associer un projet a des missions et des portraits.
"""

from plone.dexterity.content import Container
from plone.dexterity.browser import add
from plone.app.textfield import RichText
from plone.autoform.interfaces import IFormFieldProvider
# from plone.namedfile import field as namedfile
from plone.supermodel import model
# from plone.supermodel.directives import fieldset
# from z3c.form.browser.radio import RadioFieldWidget
from zope import schema
from z3c.form import button
from z3c.relationfield.schema import RelationChoice
# from z3c.relationfield.schema import RelationList
# from plone.app.vocabularies.catalog import CatalogSource

from zope.interface import implements
from zope.interface import Invalid, invariant
from zope.interface import alsoProvides

from collective import dexteritytextindexer
# from plone.formwidget.contenttree import PathSourceBinder
# from plone.namedfile.field import NamedBlobImage
# import logging
# import urllib
# import re
# from plonetheme.bebest.utils import CatalogSource
from plonetheme.bebest import _


class StartBeforeEnd(Invalid):
    __doc__ = _(u"The start or end date is invalid")


class IProject(model.Schema):

    model.fieldset('general',
                   label=_(u"general"),
                   fields=['title',
                           'subtitle',
                           'category',
                           ])
    dexteritytextindexer.searchable('title')
    title = schema.TextLine(title=_(u"mission label"),
                            required=True,
                            )
    dexteritytextindexer.searchable('subtitle')
    subtitle = schema.TextLine(title=_(u"very short description"),
                               required=False,
                               )
    dexteritytextindexer.searchable('category')
    category = schema.Set(title=_(u"project categories"),
                          description=_(u"select categories for this project"),
                          value_type=schema.Choice(
                                     vocabulary=u"bebest.projectcategories"),)
    #
    model.fielset('descriptions',
                  label=_(u"project descriptions"),
                  fields=['descripton_fr',
                          'descripton_en'])
    descripton_fr = RichText(title=_(u"french description"),
                             required=False,
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
    model.fieldset('contacts',
                   label=_(u"contacts"),
                   fields=['primary_contact',
                           'contact_fr',
                           'contact_ca'
                           ])
    # directives.widget(chief='plone.formwidget.contenttree.ContentTreeFieldWidget')

    primary_contact = RelationChoice(title=_(u"chief scientits"),
                                     vocabulary="bebest.allportraits")

    contact_fr = RelationChoice(title=_(u"french contact"),
                                vocabulary="bebest.allportraits")
    contact_ca = RelationChoice(title=_(u"canadian contact"),
                                vocabulary="bebest.allportraits")

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


class project(Container):
    implements(IProject)
    pass
