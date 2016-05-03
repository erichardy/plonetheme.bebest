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

checkEmail = re.compile(
    r"[a-zA-Z0-9._%-]+@([a-zA-Z0-9-]+\.)*[a-zA-Z]{2,4}").match


def validateEmail(value):
    if not checkEmail(value):
        raise Invalid(_(u"Invalid adress email"))
    return True


def validateURL(url):
    try:
        urllib.urlopen(url)
        return True
    except Exception:
        raise Invalid(_(u"Invalid URL"))


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
    model.fieldset('position',
                   label=_(u"position"),
                   fields=['jobs', 'employer'])
    dexteritytextindexer.searchable('jobs')
    directives.widget(jobs='z3c.form.browser.checkbox.CheckBoxFieldWidget')
    jobs = schema.Set(title=_(u"jobs"),
                      description=_(u"select your jobs"),
                      value_type=schema.Choice(vocabulary=u"bebest.jobs"),)
    dexteritytextindexer.searchable('employer')
    employer = schema.Choice(title=_(u"employer"),
                             description=_(u"main employer"),
                             source="bebest.employers",
                             )
    model.fieldset('web',
                   label=_(u"web"),
                   fields=['personal_page', 'unit_page', 'research'])
    personal_page = schema.TextLine(title=_(u"personal page"),
                                    constraint=validateURL,
                                    required=False,
                                    )
    unit_page = schema.TextLine(title=_(u"web site of the research unit"),
                                constraint=validateURL,
                                required=False,
                                )
    research = schema.TextLine(title=_(u"web page of your researches"),
                               constraint=validateURL,
                               required=False,
                               )


class portrait(Item):
    implements(IPortrait)
    pass
