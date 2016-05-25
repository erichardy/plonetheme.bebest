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
from plone.supermodel import model
# from plone.supermodel.directives import fieldset
# from z3c.form.browser.radio import RadioFieldWidget
from zope import schema
from zope.interface import implements
from collective import dexteritytextindexer
from plone.namedfile.field import NamedBlobImage
from zope.interface import alsoProvides
from plone.autoform.interfaces import IFormFieldProvider
from zope.publisher.browser import BrowserView
from plone import api

logger = logging.getLogger('bebest PORTFOLIO')

from plonetheme.bebest.utils import sort_by_position
from plonetheme.bebest.utils import isPublished
from plonetheme.bebest import _


class IPortfolio(model.Schema):

    model.fieldset('general',
                   label=_(u"general"),
                   fields=['title',
                           'main_pict',
                           'thumb_pict',
                           'authors_pict_folder',
                           ])
    dexteritytextindexer.searchable('title')
    title = schema.TextLine(title=_(u"portfolio title"),)

    main_pict = NamedBlobImage(title=_(u"main photo"),
                               required=False
                               )
    authors_pict_folder = schema.TextLine(title=_(u"authors pictures"),
                                          description=_(u"folder of picts"),
                                          required=False,
                                          default=u"authors",
                                          )
    thumb_pict = NamedBlobImage(title=_(u"small photo"),
                                required=False
                                )
    #
    model.fieldset('description',
                   label=_(u"description"),
                   fields=['blabla', ])
    blabla = RichText(title=_(u"description text"),
                      required=False,
                      )
    model.fieldset('configuration',
                   label=_(u"configuration"),
                   fields=['bg_css_class',
                           ])
    bg_css_class = schema.TextLine(title=_(u"CSS class for background"),
                                   required=True,
                                   default=u"bg-dark",
                                   )
    #

alsoProvides(IPortfolio, IFormFieldProvider)


class PortfolioView(BrowserView):
    pass


class AddView(add.DefaultAddView):
    pass


class editForm(edit.DefaultEditForm):
    pass


class portfolio(Container):
    implements(IPortfolio)

    def getPorfolioBG(self):
        try:
            bg = self.context.main_css_class
            if len(bg) > 0:
                return bg
            else:
                return 'bg-dark'
        except Exception:
            return 'bg-dark'

    def getPortfolioAuthors(self):
        # c = self.context
        authors_folder = self.authors_pict_folder
        if len(authors_folder) > 0:
            try:
                f = self[authors_folder]
                founds = api.content.find(portal_type='Image',
                                          path='/'.join(f.getPhysicalPath()),
                                          depth=1,
                                          )
                logger.info(founds)
                if len(founds) == 0:
                    return False
                objs = [i.getObject() for i in founds
                        if api.content.get_state(i.getObject()) == 'published']
                return sorted(objs, sort_by_position)
            except Exception:
                return False
        else:
            return False

    def getPortfolioImages(self):
        # c = self.context
        founds = api.content.find(portal_type='Image',
                                  path='/'.join(self.getPhysicalPath()),
                                  depth=1,
                                  )
        if len(founds) == 0:
            return False
        objs = [i.getObject() for i in founds if isPublished(i)]
        return sorted(objs, sort_by_position)

    def getPorfolioText(self):
        try:
            return self.blabla.raw
        except Exception:
            return False
