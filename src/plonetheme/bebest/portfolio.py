# -*- coding: utf-8 -*-
"""
Nous auront besoin des references :
http://docs.plone.org/external/plone.app.dexterity/docs/advanced/references.html
pour associer un projet a des missions et des portraits.
"""

import logging
from plone.dexterity.content import Container
from plone.dexterity.browser import add
from plone.dexterity.browser import edit
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
from plone.namedfile.field import NamedBlobImage
from zope.interface import alsoProvides
from plone.autoform.interfaces import IFormFieldProvider
from zope.publisher.browser import BrowserView
import urllib
import re
from plonetheme.bebest.utils import getTitleFromVoc

logger = logging.getLogger('bebest PORTFOLIO')

from plonetheme.bebest import _



class IPortfolio(model.Schema):

    model.fieldset('indentification',
                   label=_(u"identification"),
                   fields=[
                           'main_pict',
                           'authors_pict_folder',
                           'thumb_pict',
                           ])
    directives.omitted('title')
    dexteritytextindexer.searchable('title')
    title = schema.TextLine(title=_(u"Form title"),)

    dexteritytextindexer.searchable('email')
    main_pict = NamedBlobImage(title=_(u"main photo"),
                               required=False
                               )
    authors_pict_folder = schema.TextLine(title=_(u"picture author"),
                                          required=False,
                                          default=u"authors",
                                          )
    thumb_pict = NamedBlobImage(title=_(u"small photo"),
                                required=False
                                )
    #
    model.fieldset('configuration',
                   label=_(u"configuration"),
                   fields=[
                           'main_css_class',
                           ])
    main_css_class = schema.TextLine(title=_(u"main affiliation"),
                                     required=True,
                                     default=u"bg-dark",
                                     )
    #

alsoProvides(IPortfolio, IFormFieldProvider)


class PortfolioView(BrowserView):

    def getPortraitAttr(self, field):
        p = self.context
        try:
            value = eval("p." + field)
            if value:
                return value
            else:
                return False
        except Exception:
            return False

    def encodeEmail(self, email):
        return "blabla"

    def displayEN(self):
        return self.context.display_en

    def bioFR(self):
        try:
            return len(self.context.bio_fr.raw) > 4
        except Exception:
            return False

    def bioEN(self):
        try:
            return len(self.context.bio_en.raw) > 4
        except Exception:
            return False


class AddView(add.DefaultAddView):
    pass


class editForm(edit.DefaultEditForm):
    pass


class portfolio(Container):
    implements(IPortfolio)

