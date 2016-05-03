# -*- coding: utf-8 -*-
"""
Nous auront besoin des references :
http://docs.plone.org/external/plone.app.dexterity/docs/advanced/references.html
pour associer un projet a des missions et des portraits.
"""

from plone.dexterity.content import Item
from plone.app.textfield import RichText
from plone.autoform import directives
# from plone.namedfile import field as namedfile
from plone.supermodel import model
# from plone.supermodel.directives import fieldset
# from z3c.form.browser.radio import RadioFieldWidget
from zope import schema
from zope.interface import implements
from zope.interface import Invalid
from collective import dexteritytextindexer
# import logging
import urllib
import re

from plonetheme.bebest import _


def validateCoord(coord):
    try:
        float(coord)
        return True
    except Exception:
        raise Invalid(_(u"Not a float number"))


class IMission(model.Schema):

    model.fieldset('geo',
                   label=_(u"geo"),
                   fields=['lat',
                           'long',
                           ])
    dexteritytextindexer.searchable('lat')
    lat = schema.TextLine(title=_(u"latitude"),
                      constraint=validateCoord,
                      required=True,
                      )
    dexteritytextindexer.searchable('long')
    long = schema.TextLine(title=_(u"longitude"),
                       constraint=validateCoord,
                       required=True,
                       )


class mission(Item):
    implements(IMission)
    pass
