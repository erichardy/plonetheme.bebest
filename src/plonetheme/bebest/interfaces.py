# -*- coding: utf-8 -*-
"""Module where all interfaces, events and exceptions live."""

from plonetheme.bebest import _
from zope.schema import TextLine, Text
from zope.interface import Interface
from zope.publisher.interfaces.browser import IDefaultBrowserLayer


class IPlonethemeBebestLayer(IDefaultBrowserLayer):
    """Marker interface that defines a browser layer."""


class I(Interface):

    title = TextLine(
        title=_(u"Title"),
        required=True,
    )

    description = Text(
        title=_(u"Description"),
        required=False,
    )


class IPlonethemeBebestSettings(Interface):

    carousel_label = TextLine(title=_(u"carousel label"),
                              description=_(u"for carousel at home page"),
                              default=u"Joint laboratory in benthic ecology",
                              )

    logo_name = TextLine(title=_(u"Logo filename, should be in"),
                         description=_(u"portal_skins/custom/images"),
                         default=u"logoblanc.svg",
                         )
