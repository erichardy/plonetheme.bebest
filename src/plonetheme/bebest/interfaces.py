# -*- coding: utf-8 -*-
"""Module where all interfaces, events and exceptions live."""

from plonetheme.bebest import _
from zope.schema import TextLine, Text, List
from zope.interface import Interface
from plone.supermodel import model
from zope.publisher.interfaces.browser import IDefaultBrowserLayer


class IPlonethemeBebestLayer(IDefaultBrowserLayer):
    """Marker interface that defines a browser layer."""


jobList = []
jobList.append(u'Chercheur')
jobList.append(u'Plongeur')
jobList.append(u'Photographe')
jobList.append(u'Danseuse/Danseur')
jobList.append(u'')


class IPlonethemeBebestSettings(model.Schema):

    model.fieldset('home-page',
                   label=_(u"home page settings"),
                   fields=['carousel_label',
                           'carousel_interval',
                           'logo_name',
                           'tag_home',
                           'about_bg_image',
                           'about_document_tag',])

    carousel_label = TextLine(title=_(u"carousel label"),
                              description=_(u"for carousel at home page"),
                              default=u"Joint laboratory in benthic ecology",
                              )
    carousel_interval = TextLine(title=_(u"carousel interval"),
                                 description=_(u"milliseconds"),
                                 default=u"4000",
                                 )
    logo_name = TextLine(title=_(u"Logo filename, should be in"),
                         description=_(u"portal_skins/custom/images"),
                         default=u"logoblanc.svg",
                         )
    tag_home = TextLine(title=_(u"Tag used for thumbnails on home page"),
                        description=_(u"Only One word, used for folders"),
                        default=u"bebest-home",
                        )
    about_bg_image = TextLine(title=_(u"Background image for about section"),
                              description=_(u"in portal_skins/custom/images"),
                              default=u"csj-soft.png",
                              )
    about_document_tag = TextLine(title=_(u"Tag used for about items"),
                                  description=_(u"For home page"),
                                  default=u"bebest-home",
                                  )
    model.fieldset('portfolio',
                   label=_(u"portfolio settings"),
                   fields=['portfolio_author_tag'],)
    portfolio_author_tag = TextLine(title=_(u"Tag used for Authors"),
                                    description=_(u"used for portfolio view"),
                                    default=u"portfolio-author",
                                    )
    model.fieldset('positions',
                   label=_(u"misc for portraits"),
                   fields=['jobs'],)
    jobs = List(title=_(u"position, jobs, etc..."),
                description=_(u"One job per line"),
                value_type=TextLine(),
                default=jobList,
                )
