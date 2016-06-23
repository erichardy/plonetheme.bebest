# -*- coding: utf-8 -*-
"""Module where all interfaces, events and exceptions live."""

from plonetheme.bebest import _
from zope.schema import TextLine, List, Int, Text
# from zope.interface import Interface
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
affiliationList = []
affiliationList.append(u'CNRS')
affiliationList.append(u'UBO')
affiliationList.append(u'UQAR')
categoriesList = []
categoriesList.append(u"Recherche scientifique")
categoriesList.append(u"création artistique")
categoriesList.append(u"Enseignement")
categoriesList.append(u"Film documentaire")
categoriesList.append(u'Exposition "grand public"')
portfolioBGClasses = []
portfolioBGClasses.append(u"bg-dark")
portfolioBGClasses.append(u"bg-light")
defaultIconList = u"""

var defaultIcon = L.icon({
    iconAnchor: [13, 27],
    iconUrl: 'markers/marker-icon.png'
});
var bebestIcon = L.icon({
    iconUrl: '++theme++plonetheme.bebest/images/leaflet/icon-orange.png',
    iconSize:     [27, 40],
    iconAnchor:   [13, 40],
    popupAnchor:  [0, -40]
});
var orange = L.icon ({
    iconSize: [27, 27],
    iconAnchor: [13, 27],
    iconUrl: 'markers/icon-orange.png'
});
var iconList = {
   "defaultIcon": defaultIcon,
   "orange": orange,
   "bebestIcon": bebestIcon
   };

"""


class IPlonethemeBebestSettings(model.Schema):

    model.fieldset('home-page',
                   label=_(u"home page settings"),
                   fields=['carousel_label',
                           'carousel_interval',
                           'logo_name',
                           'tag_home',
                           'default_thumb',
                           'tag_home_news',
                           'about_bg_image',
                           'about_document_tag',
                           'home_map_title',
                           'home_map_description',
                           'zoom',
                           'map_center',
                           ])

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
    default_thumb = TextLine(title=_(u"Name of the default thumb image"),
                             description=_(u"image in portal_skins/custom"),
                             default=u"default_thumbnail.jpg",
                             )
    tag_home_news = TextLine(title=_(u"Tag used for news on home page"),
                             description=_(u"Only One word, used for news"),
                             default=u"bebest-home-news",
                             )
    about_bg_image = TextLine(title=_(u"Background image for about section"),
                              description=_(u"in portal_skins/custom/images"),
                              default=u"csj-soft.png",
                              )
    about_document_tag = TextLine(title=_(u"Tag used for about items"),
                                  description=_(u"for home page"),
                                  default=u"bebest-home",
                                  )
    home_map_title = TextLine(title=_(u"main title for map on home page"),
                              description=_(u"for home page"),
                              default=u"Les sites d'étude du LIA Bebest",
                              )
    home_map_description = TextLine(title=_(u"description for map"),
                                    description=_(u"for home page"),
                                    default=u"Les sites d'étude du LIA Bebest",
                                    )
    zoom = Int(title=_(u"zoom level"),
               description=_(u"between 0 and 15"),
               max=15,
               default=4,
               required=False)
    map_center = TextLine(title=_(u"map center"),
                          description=_(u'in the form "[lat, long]"'),
                          default=u'[48.40003249610685, -4.5263671875]',
                          required=False,
                          )
    model.fieldset('portfolio',
                   label=_(u"portfolio settings"),
                   fields=['portfolio_author_tag',
                           'portfolio_bg_classes',
                           ],)
    portfolio_bg_classes = List(title=_(u"CSS Classes"),
                                description=_(u"for portfolio background"),
                                value_type=TextLine(),
                                default=portfolioBGClasses,
                                )
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
    model.fieldset('projects',
                   label=_(u"misc for projects"),
                   fields=['project_categories'],)
    project_categories = List(title=_(u"Project categories"),
                              description=_(u"One category per line"),
                              value_type=TextLine(),
                              default=categoriesList,
                              )
    model.fieldset('misc',
                   label=_(u"misc"),
                   fields=['max_news',
                           'icons',
                           ],)
    max_news = Int(title=_(u"max news to display"),
                   min=1,
                   max=300,
                   default=8,
                   )
    icons = Text(title=_(u"icon list"),
                 description=_(u"must be valid javascript code !"),
                 default=defaultIconList,
                 )
