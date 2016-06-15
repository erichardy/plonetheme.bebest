# -*- coding: utf-8 -*-

from plone.supermodel import model
from zope.interface import provider
from zope.interface import implementer
from plone.autoform.interfaces import IFormFieldProvider
from zope import schema
from plone.app.textfield import RichText

from plonetheme.bebest import _


@provider(IFormFieldProvider)
class IEnglishText(model.Schema):
    """Add english text option to content
    """

    display_en = schema.Bool(title=_(u"display english text"),
                             description=_(u"unselect to disable"),
                             default=True
                             )

    presentation_en = RichText(title=_(u"english text"),
                               description=_(u"presentation en"),
                               required=False
                               )


@implementer(IEnglishText)
class englishText(object):
    
    def __init__(self, context):
        self.context = context
