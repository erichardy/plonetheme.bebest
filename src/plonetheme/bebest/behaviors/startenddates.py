# -*- coding: utf-8 -*-

from plone.supermodel import model
from zope.interface import provider
from zope.interface import implementer
from plone.autoform.interfaces import IFormFieldProvider
from zope import schema
from collective import dexteritytextindexer

from plonetheme.bebest import _


@provider(IFormFieldProvider)
class IStartEndDates(model.Schema):
    """Add tags to content
    """

    model.fieldset('dates',
                   fields=['display_dates',
                           'start_date',
                           'end_date',],
                   )
    display_dates = schema.Bool(title=_(u"display start and end dates ?"),
                                description=_(u"unselect to disable"),
                                default=True
                                )
    dexteritytextindexer.searchable('start_date')
    start_date = schema.Date(title=_(u"start date"),
                             description=_(u""),
                             required=False,
                             )
    dexteritytextindexer.searchable('end_date')
    end_date = schema.Date(title=_(u"end date"),
                           description=_(u""),
                           required=False,
                           )

@implementer(IStartEndDates)
class startEndDates(object):
    
    def __init__(self, context):
        self.context = context
