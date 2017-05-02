# -*- coding: utf-8 -*-
"""
Nous auront besoin des references :
http://docs.plone.org/external/plone.app.dexterity/docs/advanced/references.html
pour associer un projet a des missions et des portraits.
"""

import logging
from plone.dexterity.content import Item
# from plone.dexterity.browser import add
# from plone.dexterity.browser import edit
from plone.app.textfield import RichText
from plone.supermodel import model
# from plone.autoform import directives
# from plone.supermodel.directives import fieldset
# from z3c.form.browser.radio import RadioFieldWidget
from zope import schema
from zope.interface import implements
from collective import dexteritytextindexer
from plone.namedfile.field import NamedBlobImage
from zope.interface import alsoProvides
from plone.autoform.interfaces import IFormFieldProvider

from zope.publisher.browser import BrowserView
# from plone import api

logger = logging.getLogger('bebest PORTFOLIO')

# from plonetheme.bebest.utils import sort_by_position
# from plonetheme.bebest.utils import isPublished
# from plonetheme.bebest.utils import validateURL
from plonetheme.bebest import _


class IBebestImage(model.Schema):

    model.fieldset('general',
                   label=_(u"general"),
                   fields=['title',
                           'image',
                           'thumb_pict',
                           'url',
                           ])
    dexteritytextindexer.searchable('title')
    title = schema.TextLine(title=_(u"image title"),)

    image = NamedBlobImage(title=_(u"main photo"),
                           required=False,
                           )
    thumb_pict = NamedBlobImage(title=_(u"small photo"),
                                required=False,
                                )
    url = schema.URI(title=_(u"web site related"),
                     # constraint=validateURL,
                     required=False,
                     )
    #
    model.fieldset('description',
                   label=_(u"description"),
                   fields=['description', 'blabla', ])
    description = schema.Text(title=_(u"description"),
                              required=False)
    blabla = RichText(title=_(u"description text"),
                      required=False,
                      )
    #

alsoProvides(IBebestImage, IFormFieldProvider)


class BebestImageView(BrowserView):
    pass


"""
class AddView(add.DefaultAddView):
    pass


class editForm(edit.DefaultEditForm):
    pass
"""


class bebestimage(Item):
    implements(IBebestImage)

    def getImageSRC(self):
        """
        pour utiliser avec l'attribut src de <img src="....
        """
        src = self.absolute_url() + '/@@download/image/'
        src += self.image.filename
        return src

    def getThumbSRC(self):
        """
        pour utiliser avec l'attribut src de <img src="....
        """
        try:
            src = self.absolute_url() + '/@@download/thumb_pict/'
            src += self.thumb_pict.filename
            return src
        except Exception:
            return False

    def getImageURL(self):
        if self.url:
            return self.url
        else:
            return False

    def getImageDescription(self):
        try:
            return self.description
        except Exception:
            return False

    def getImageText(self):
        try:
            return self.blabla.raw
        except Exception:
            return False