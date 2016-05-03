# -*- coding: utf-8 -*-
"""
Nous auront besoin des references :
http://docs.plone.org/external/plone.app.dexterity/docs/advanced/references.html
pour associer un projet a des missions et des portraits.
"""

from plone.dexterity.content import Item
from plone.app.textfield import RichText
from plone.autoform import directives
from plone.namedfile import field as namedfile
from plone.supermodel import model
from plone.supermodel.directives import fieldset
from plone.i18n.normalizer.interfaces import INormalizer
from zope.component import getUtility
from z3c.form.browser.radio import RadioFieldWidget
from zope import schema
from zope.interface import implements
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary
from zope.interface import Invalid
from collective import dexteritytextindexer
from z3c.form.browser.checkbox import CheckBoxFieldWidget
import logging
import re

from plonetheme.bebest import _

checkEmail = re.compile(
    r"[a-zA-Z0-9._%-]+@([a-zA-Z0-9-]+\.)*[a-zA-Z]{2,4}").match


def validateEmail(value):
    if not checkEmail(value):
        raise Invalid(_(u"Invalid adress email"))
    return True


class IPortrait(model.Schema):
    
    model.fieldset('indentification',
                   label=_(u"identification"),
                   fields=['family_name',
                           'first_name',
                           'email',
                           ])
    directives.omitted('title')
    dexteritytextindexer.searchable('title')
    title = schema.TextLine(title=_(u"Form title"),)

    dexteritytextindexer.searchable('family_name')
    family_name = schema.TextLine(title=_(u"person family name"),
                                  required=True,
                                  )
    dexteritytextindexer.searchable('first_name')
    first_name = schema.TextLine(title=_(u"person first name"),
                                 required=True,
                                 )
    dexteritytextindexer.searchable('email')
    email = schema.ASCIILine(title=_(u"email address"),
                             constraint=validateEmail,
                             )
    model.fieldset('biography',
                   label=_(u"biography"),
                   fields=['bio_fr',
                           'bio_en'])
    dexteritytextindexer.searchable('bio_fr')
    bio_fr = RichText(title=_(u"french biography"),
                      required=False,
                      )
    dexteritytextindexer.searchable('bio_en')
    bio_en = RichText(title=_(u"english biography"),
                      required=False,
                      )
    dexteritytextindexer.searchable('jobs')
    directives.widget(jobs='z3c.form.browser.checkbox.CheckBoxFieldWidget')
    jobs = schema.Set(title=_(u"jobs"),
                      description=_(u"select your jobs"),
                      value_type=schema.Choice(vocabulary=u"bebest.jobs"),)


class portrait(Item):
    implements(IPortrait)
    pass
