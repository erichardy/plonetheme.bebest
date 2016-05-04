# -*- coding: utf-8 -*-
"""
Nous auront besoin des references :
http://docs.plone.org/external/plone.app.dexterity/docs/advanced/references.html
pour associer un projet a des missions et des portraits.
"""

from plone.dexterity.content import Container
from plone.app.textfield import RichText
from plone.autoform import directives
from plone.autoform.interfaces import IFormFieldProvider
# from plone.namedfile import field as namedfile
from plone.supermodel import model
# from plone.supermodel.directives import fieldset
# from z3c.form.browser.radio import RadioFieldWidget
from zope import schema
from z3c.relationfield.schema import RelationChoice
from z3c.relationfield.schema import RelationList
from plone.app.vocabularies.catalog import CatalogSource

from zope.interface import implements
from zope.interface import Invalid, invariant
from zope.interface import alsoProvides

from collective import dexteritytextindexer
from plone.formwidget.contenttree import PathSourceBinder
from plone.formwidget.contenttree import ContentTreeFieldWidget
from plone.formwidget.contenttree import MultiContentTreeFieldWidget
# from plone.namedfile.field import NamedBlobImage
# import logging
# import urllib
# import re

from plonetheme.bebest import _


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
                           'description',
                           ])
    dexteritytextindexer.searchable('title')
    title = schema.TextLine(title=_(u"mission label"),
                            required=True,
                            )
    dexteritytextindexer.searchable('subtitle')
    subtitle = schema.TextLine(title=_(u"very short description"),
                               required=False,
                               )
    dexteritytextindexer.searchable('description')
    description = RichText(title=_(u"Presentation"),
                           description=_(u"Mission presentation"),
                           required=False
                           )
    model.fieldset('geo_dates',
                   label=_(u"geo and dates"),
                   fields=['coordinates',
                           'start_date',
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
    dexteritytextindexer.searchable('coordinates')
    coordinates = schema.Text(title=_(u"coordinates, point or polygone"),
                                  description=_(u"must be in kml format"),
                                  required=False,
                                  )
    model.fieldset('participants',
                   label=_(u"participants"),
                   fields=['chief',
                           'other',
                           ])
    # directives.widget(chief='plone.formwidget.contenttree.ContentTreeFieldWidget')
    chief = RelationChoice(title=_(u"chief scientits"),
                           vocabulary="plone.app.vocabularies.Catalog")
    other = RelationList(title=_(u"other participants"),
                         value_type=RelationChoice(title=_(u'Target'),
                                                   source=CatalogSource(banner_has_image=True))
                         
                           )

    @invariant
    def validateStartEnd(data):
        if data.start_date is not None and data.end_date is not None:
            if data.start_date > data.end_date:
                msg = u"The start date must be before the end date."
                raise StartBeforeEnd(_(msg))

alsoProvides(IMission, IFormFieldProvider)


class mission(Container):
    implements(IMission)
    pass
