# -*- coding: utf-8 -*-

"""
cf plone.app.contenttypes.behaviors.richtext.py
"""
from plone.supermodel import model
from zope.component import adapter
from zope.interface import implementer
from zope.interface import provider

from plone.autoform.interfaces import IFormFieldProvider
from plone.dexterity.interfaces import IDexterityContent
from zope import schema
from plone.app.textfield import RichText as RichTextField
from plone.autoform.view import WidgetsView
from plone.app.z3cform.widget import RichTextFieldWidget
from plone.autoform import directives as form
from collective import dexteritytextindexer

from plonetheme.bebest import _


@provider(IFormFieldProvider)
class IEnglishText(model.Schema):
    """Add english text option to content
    """

    display_en = schema.Bool(title=_(u"display english text"),
                             description=_(u"unselect to disable"),
                             default=True
                             )
    dexteritytextindexer.searchable('presentation_en')
    presentation_en = RichTextField(title=_(u"english text"),
                                    description=_(u"presentation en"),
                                    required=False
                                    )
    form.widget('presentation_en', RichTextFieldWidget)
    model.primary('presentation_en')


@implementer(IEnglishText)
@adapter(IDexterityContent)
class englishText(object):
    
    def __init__(self, context):
        self.context = context


class WidgetView(WidgetsView):
    schema = IEnglishText
