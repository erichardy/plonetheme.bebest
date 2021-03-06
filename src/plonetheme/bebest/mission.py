# -*- coding: utf-8 -*-
"""
Nous aurons besoin des references :
http://docs.plone.org/external/plone.app.dexterity/docs/advanced/references.html
pour associer un projet à des missions et des portraits.

tools to get coordinates :

* http://www.birdtheme.org/useful/v3tool.html

* http://www.latlong.net/

* http://codepen.io/jhawes/pen/ujdgK

* http://stackoverflow.com/questions/5072059/polygon-drawing-and-getting-
  coordinates-with-google-map-api-v3

* charger un kml/gps/geojson dans leaflet :
  http://www.d3noob.org/2014/02/load-kml-gpx-or-geojson-traces-into.html

"""

from plone.dexterity.content import Container
from plone.dexterity.browser import add
# from plone.dexterity.browser import edit
from plone.app.textfield import RichText
from plone import api
# from plone.autoform import directives
from plone.autoform.interfaces import IFormFieldProvider
# from plone.namedfile import field as namedfile
from plone.supermodel import model
# from plone.supermodel.directives import fieldset
# from z3c.form.browser.radio import RadioFieldWidget
from zope import schema
from z3c.relationfield.schema import RelationChoice
from z3c.relationfield.schema import RelationList
from z3c.form import button
from plone.app.vocabularies.catalog import CatalogSource as CS

from zope.interface import implements
from zope.interface import Invalid, invariant
from zope.interface import alsoProvides

from zope.publisher.browser import BrowserView
from collective import dexteritytextindexer
from Products.CMFPlone.utils import safe_unicode
# from plone.formwidget.contenttree import ObjPathSourceBinder
# from plone.formwidget.contenttree.source import PathSource
# from Products.CMFCore.interfaces import IFolderish
# from plone.formwidget.contenttree import PathSourceBinder
# from plone.formwidget.contenttree import ContentTreeFieldWidget
# from plone.formwidget.contenttree import MultiContentTreeFieldWidget
from plone.namedfile.field import NamedBlobImage, NamedBlobFile
import logging
import geojson
# import urllib
# import re
from plonetheme.bebest.utils import getGalleryImages as ggi
from plonetheme.bebest import _

logger = logging.getLogger('bebest MISSIONS')
mois = []
mois.append(u"Janvier")
mois.append(u"Février")
mois.append(u"Mars")
mois.append(u"Avril")
mois.append(u"Mai")
mois.append(u"Juin")
mois.append(u"Juillet")
mois.append(u"Aout")
mois.append(u"Septembre")
mois.append(u"Octobre")
mois.append(u"Novembre")
mois.append(u"Décembre")
months = {}
months['01'] = u"Janvier"
months['02'] = u"Février"
months['03'] = u"Mars"
months['04'] = u"Avril"
months['05'] = u"Mai"
months['06'] = u"Juin"
months['07'] = u"Juillet"
months['08'] = u"Aout"
months['09'] = u"Septembre"
months['10'] = u"Octobre"
months['11'] = u"Novembre"
months['12'] = u"Décembre"


class StartBeforeEnd(Invalid):
    __doc__ = _(u"The start or end date is invalid")


class invalidGeoJson(Invalid):
    __doc__ = _(u"geojson not valid")


def validateCoord(coord):
    """
    Vérification qu'une coordonnée est un nombre flottant valide
    """
    try:
        float(coord)
        return True
    except Exception:
        raise Invalid(_(u"Not a float number"))


class IMission(model.Schema):
    """
    Schema du type de contenu ``bebest.mission``
    """
    model.fieldset('general',
                   label=_(u"general"),
                   fields=['title',
                           'description',
                           'start_date',
                           'end_date',
                           ])

    dexteritytextindexer.searchable('title')
    title = schema.TextLine(title=_(u"mission label"),
                            required=True,
                            )
    dexteritytextindexer.searchable('description')
    description = schema.TextLine(title=_(u"very short mission description"),
                                  required=True,
                                  )
    dexteritytextindexer.searchable('start_date')
    start_date = schema.Date(title=_(u"start date for the mission"),
                             description=_(u""),
                             required=False,
                             )
    dexteritytextindexer.searchable('end_date')
    end_date = schema.Date(title=_(u"end date for the mission"),
                           description=_(u""),
                           required=False,
                           )
    model.fieldset('descriptions',
                   label=_(u"descriptions"),
                   fields=['presentation_fr',
                           'display_en',
                           'presentation_en',
                           'main_pict',
                           'pict_author',
                           'doc'])
    dexteritytextindexer.searchable('presentation_fr')
    presentation_fr = RichText(title=_(u"french presentation"),
                               description=_(u"Mission presentation"),
                               required=False
                               )
    display_en = schema.Bool(title=_(u"display english description"),
                             description=_(u"unselect to disable"),
                             default=True
                             )

    presentation_en = RichText(title=_(u"english presentation"),
                               description=_(u"Mission presentation"),
                               required=False
                               )
    main_pict = NamedBlobImage(title=_(u"main photo"),
                               required=True
                               )
    pict_author = schema.TextLine(title=_(u"picture author"),
                                  required=False,
                                  )
    doc = NamedBlobFile(title=_(u"other document"),
                        description=_(u"downloaded by visitors"),
                        required=False)

    model.fieldset('geo',
                   label=_(u"geo"),
                   fields=['zoom',
                           'map_center',
                           'geojson',
                           ])
    zoom = schema.Int(title=_(u"zoom level"),
                      description=_(u"between 0 and 15"),
                      min=0,
                      max=15,
                      default=4,
                      required=False)
    map_center = schema.TextLine(title=_(u"map center"),
                                 description=_(u'in the form "[lat, long]"'),
                                 default=u'[48.40003249610685, -4.5263671875]',
                                 required=False,
                                 )
    geojson = schema.Text(title=_(u"coordinates in GEOJSON format"),
                          description=_(u"Use http://geojson.io/"),
                          required=False)
    model.fieldset('participants',
                   label=_(u"participants"),
                   fields=['chief',
                           'other',
                           ])
    chief = RelationChoice(title=_(u"chief scientist"),
                           source=CS(portal_type="bebest.portrait"),
                           required=False,
                           )
    other = RelationList(title=_(u"other participants"),
                         value_type=RelationChoice(
                             title=_(u'Target'),
                             source=CS(portal_type="bebest.portrait")),
                         required=False,
                         )

    @invariant
    def validateStartEnd(data):
        """
        :param data: les données du formulaire
        :type data: objet ayant pour attrituts les champs du formulaire
        :return: lève une erreur si la date de début est après la date de fin
        """
        if data.start_date is not None and data.end_date is not None:
            if data.start_date > data.end_date:
                msg = u"The start date must be before the end date."
                raise StartBeforeEnd(_(msg))

    @invariant
    def validateGeoJson(data):
        """
        :param data: les données du formulaire
        :type data: objet ayant pour attrituts les champs du formulaire
        :return: lève une erreur si les données geojson ne sont pas valides.
           Cette vérification est seulement faite en tentant la
           méthode ``loads`` de la librairie ``geojson``
        """
        if data.geojson:
            try:
                geojson.loads(data.geojson)
            except ValueError as e:
                logger.info(str(e))
                raise invalidGeoJson(str(e))


alsoProvides(IMission, IFormFieldProvider)


class AddForm(add.DefaultAddForm):
    portal_type = 'bebest.mission'
    ignoreContext = True
    title = _(u"Add a new mission !")

    def update(self):
        super(add.DefaultAddForm, self).update()
        # logger.info('in update')
        # logger.info(self.context)

    def updateWidgets(self):
        super(add.DefaultAddForm, self).updateWidgets()
        # logger.info(self.context)

    @button.buttonAndHandler(_(u'Save this mission'), name="save_this_mission")
    def handleApply(self, action):
        data, errors = self.extractData()
        if errors:
            self.status = _("Please correct errors")
            return
        try:
            obj = self.createAndAdd(data)
            # logger.info(obj)
            # logger.info(u'=-=-=-=-=')
            context = self.context
            objId = obj.getId()
            url = context[objId].absolute_url()
            self.request.response.redirect(url)
        except Exception:
            raise

    @button.buttonAndHandler(_(u'Cancel this mission'))
    def handleCancel(self, action):
        data, errors = self.extractData()
        # context is the thesis repo
        contextURL = self.context.absolute_url()
        self.request.response.redirect(contextURL)


class AddView(add.DefaultAddView):
    form = AddForm

"""
class editForm(edit.DefaultEditForm):
    pass
"""


class MissionView(BrowserView):
    """
    Vue des missions

    .. note:: les méthodes de cette vue ne sont généralement pas utilisées.
       on préfère utiliser les méthodes de l'objet lui-même
    """

    def _date_fr(self, date):
        j = date.strftime("%d")
        m = date.strftime("%m")
        y = date.strftime("%Y")
        M = months[m]
        return j + ' ' + M + ' ' + y

    def getDates(self):
        start = self.context.start_date
        end = self.context.end_date
        if (start is None) or (end is None):
            return False
        return self._date_fr(start) + ' - ' + self._date_fr(end)

    def getParentProject(self):
        return self.context.aq_inner.aq_parent

    def getPictAuthor(self):
        if not self.context.pict_author:
            return False
        return self.context.pict_author

    def getChief(self):
        return self.context.chief.to_object

    def getTeam(self):
        others = []
        for other in self.context.other:
            others.append(other.to_object)
        # import pdb;pdb.set_trace()
        return others

    def getAffiliations(self, person):
        aff = u""
        if person.affiliation1:
            aff += person.affiliation1
        if person.affiliation2:
            aff += ' - ' + person.affiliation2
        if person.affiliation3:
            aff += ' - ' + person.affiliation3
        return aff

    def displayEN(self):
        return self.context.display_en

    def getGalleryImages(self):
        return ggi(self.context)


class mission(Container):
    implements(IMission)

    def getMapZoom(self):
        """
        :return: un code javascript rendu dans la vue contenant le niveau
           de zoom au chargement de la carte. Valeur par défaut : ``4``
        """
        zoomjs = '<script>var zoom = 4;</script>'
        try:
            zoom = self.zoom
            if zoom:
                zoomjs = '<script>var zoom = ' + str(zoom) + ";</script>"
                return zoomjs
            else:
                return zoomjs
        except Exception:
            return zoomjs

    def getMapCenter(self):
        """
        :return: les coordonnées de centrage de la carte au chargement
           de la page. Valeurs par défaut :
           ``[48.40003249610685, -4.5263671875]``
        """
        center_a = '<script>var center = '
        center_b = ';</script>'
        val = ' [48.40003249610685, -4.5263671875] '
        default = center_a + val + center_b
        try:
            center = self.map_center
            if center:
                testval = eval(center)
                if len(testval) != 2:
                    return default
                val0 = (isinstance(testval[0], int)
                        or
                        isinstance(testval[0], float))
                val1 = (isinstance(testval[1], int)
                        or
                        isinstance(testval[1], float))
                if (not val0) or (not val1):
                    return default
                return center_a + center + center_b
        except Exception:
            return default

    def getGeoJSON(self):
        """
        :return: la **featureCollection** de la mission.
           Si aucune valeur, retourne ``False``
        """
        geo = self.geojson
        try:
            if len(geo) > 5:
                geojson = u"<script>var missionsFeatures = "
                geojson += safe_unicode(geo)
                geojson += u";</script>"
                return geojson
            else:
                return False
        except Exception:
            return False

    def getIconsList(self):
        """
        :return: le code javascript de la liste des icones définis
           dans le controlpanel
        """
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.icons'
        icons = api.portal.get_registry_record(prefix)
        return u"<script>" + icons + u"</script>"

    def _date_fr(self, date):
        """
        :return: une chaine de caractères représentant une date telle
           qu'on la représente habituellement en france : jj Mois YYYY
        """
        j = date.strftime("%d")
        m = date.strftime("%m")
        y = date.strftime("%Y")
        M = months[m]
        return j + ' ' + M + ' ' + y

    def getDates(self):
        """
        :return: les dates de début et de fin de la mission. Si pas de
           date, retourne ``False``
        """
        start = self.start_date
        end = self.end_date
        if (start is None) or (end is None):
            return False
        return self._date_fr(start) + ' - ' + self._date_fr(end)

    def getParentProject(self):
        """
        :return: l'objet parent de la mission. Normalement, ce doit être
           un projet
        """
        return self.aq_inner.aq_parent

    def getPictAuthor(self):
        """
        :return: L'auteur de l'image principale de la mission.
           Ou ``False`` si pas d'auteur
        """
        if not self.pict_author:
            return False
        return self.pict_author

    def getAffiliations(self, person):
        """
        A une mission, sont associées des personnes dont le portrait
        a été préalablement saisi.

        :param person: l'une des personnes impliquée dans la mission
        :type person: bebest.portrait
        :return: les affiliations de la personne
        """
        aff = u""
        if person.affiliation1:
            aff += person.affiliation1
        if person.affiliation2:
            aff += ' - ' + person.affiliation2
        if person.affiliation3:
            aff += ' - ' + person.affiliation3
        return aff

    def displayEN(self):
        """
        :return: Booléen qui indique si on affiche la version anglaise
        """
        return self.display_en

    def getGalleryImages(self):
        """
        :return: la liste des images du répertoire ``carousel`` si présent.
           Sinon, ``False``
        """
        return ggi(self)

    def getTeam(self):
        """
        :return: La liste des ``bebest.portrait`` des participants
           à la mission. Si liste vide : ``False``
        """
        others = []
        for other in self.other:
            others.append(other.to_object)
        # import pdb;pdb.set_trace()
        if not len(others):
            return False
        return others

    def getChief(self):
        """
        :return: le ``bebest.portrait`` du chef de mission
        """
        return self.chief.to_object

    def getTextFR(self):
        """
        :return: Le texte en français en format ``raw`` s'il existe.
           Sinon ``False``
        """
        try:
            if len(self.presentation_fr.raw) < 6:
                # logger.info('inf a 6')
                return False
            else:
                return self.presentation_fr.raw
        except Exception:
            # logger.info('excepppppp')
            return False

    def getTextEN(self):
        """
        :return: Le texte en anglais en format ``raw`` s'il existe.
           Sinon ``False``
        """
        try:
            if len(self.presentation_en.raw) < 6:
                return False
            else:
                return self.presentation_en.raw
        except Exception:
            return False
