# -*- coding: utf-8 -*-

import logging
from zope.publisher.browser import BrowserView
# from operator import attrgetter
from plone import api

logger = logging.getLogger('bebest')


class bebestHome(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def _getHomeObject(self,
                       registry_record,
                       obj_type,
                       effective=True):
        """
        méthode qui permet de trouver des objets selon les critères suivants :
        
        * un des mots clé de l'objet contient le mot clé enregistré dans
          le registre donné en paramètre
        
        * le type de contenu
        
        * la liste est retournée triée en fonction de la date de publication
        
        :param registry_record: le registre où aller chercher une valeur.
            Dernier élément après
            'plonetheme.bebest.interfaces.IPlonethemeBebestSettings'
        :type registry_record: str
        :param obj_type: type de contenu recherché
        :type obj_type: str
        :param effective: si ``True``, la liste est triée en fonction
           de la date de publication
        :type effective: Boolean
        :return: une liste d'objets ou ``False`` si on n'a rien trouvé
        """
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.' + registry_record
        tag = api.portal.get_registry_record(prefix)
        portal = api.portal.get()
        founds = api.content.find(context=portal,
                                  portal_type=obj_type,
                                  state="published"
                                  )
        if len(founds) == 0:
            return False
        objs = []
        for found in founds:
            obj = found.getObject()
            state = api.content.get_state(obj)
            if (tag in obj.Subject()) and (state == 'published'):
                # if tag in obj.Subject():
                objs.append(obj)
        if len(objs) == 0:
            return False
        if effective:
            sortedObjs = sorted(objs,
                                key=lambda obj: obj.effective(),
                                reverse=True)
            return sortedObjs
        return objs

    def getCarouselText(self):
        """
        :return: la valeur du registre ``carousel_label`` pour
          afficher par dessus le carousel
        """
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.carousel_label'
        label = api.portal.get_registry_record(prefix)
        return label

    def getCarouselInterval(self):
        """
        :return: En millisecondes, le temps de défilement des
          images du carousel
        """
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.carousel_interval'
        interval = api.portal.get_registry_record(prefix)
        return interval

    def getCarouselLogoName(self):
        """
        :return: le nom du fichier image qui s'affiche en overlay
          sur le carousel. Ce fichier image doit être présent
          dans ``portal_skins/custom``. généralement une image
          *png*.
        """
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.logo_name'
        logo_name = api.portal.get_registry_record(prefix)
        return logo_name

    def getCarouselImages(self):
        """
        :return: la liste des images qui doivent défiler dans le carousel.
          Ces images doivent être placées dans un ``Folder`` ayant pour
          id : ``bebest-carousel``
        """
        context = self.context
        if context.portal_type != 'Folder':
            context = context.aq_parent
        objs = []
        try:
            images = api.content.find(context=context['bebest-carousel'],
                                      depth=1,
                                      portal_type='Image')
            for image in images:
                objs.append(image.getObject())
            # logger.info(len(images))
        except Exception:
            logger.info('0 images !')
        # logger.info(str(len(objs)) + ' images dans le carousel')
        if len(objs) == 0:
            return False
        return objs

    def localText(self, obj):
        """
        Le type de contenu est un ``Document``. Cette méhode retourne
        le contenu *RichText* de ce document.
        """
        if obj.text:
            return obj.text.raw
        else:
            return "<p />"

    def getCarouselThumbnails(self):
        """
        :return: la liste des ``Folder`` qui doivent apparaître
            comme thumbnail. Ces folders doivent avoir le mot clé
            enregistré dans ``tag_home``.
        """
        homeThumbnails = self._getHomeObject(registry_record='tag_home',
                                             obj_type='Folder',
                                             effective=True)
        return homeThumbnails

    def getHomeNews(self):
        """
        :return: la liste des ``News Item`` qui ont le mot clé
          enregistré dans ``tag_home``.
        """
        homeNews = self._getHomeObject(registry_record='tag_home',
                                       obj_type='News Item',
                                       effective=True)
        return homeNews

    def getAboutBgImage(self):
        """
        :return: le nom du fichier image (qui doit être
            présent dans ``portal_skins/custom``) qui décore
            la section *About*
        """
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.about_bg_image'
        bg_image = api.portal.get_registry_record(prefix)
        return bg_image

    def getAboutUsDocuments(self):
        """
        :return: une liste des trois derniers documents publiés
            qui ont le mot clé enregistré dans ``about_document_tag``.
            De ces documents, on affiche que la description dans la
            *home page*.
        """ 
        reg = 'about_document_tag'
        aboutUsDocuments = self._getHomeObject(registry_record=reg,
                                               obj_type='Document',
                                               effective=True)
        if aboutUsDocuments:
            return aboutUsDocuments[:3]
        else:
            return False

    def getAboutContainerClass(self, nb):
        if nb == 3:
            return 'container-fluid'
        return 'container'

    def getAboutClasses(self, nb):
        """
        :return: les classes des items de la section *About*
            dependent du nombre de ceux-ci...
        """
        base = "col-xs-12 col-sm-10 col-sm-offset-1 "
        classesAbout = []
        if nb == 1:
            classesAbout.append(base + "col-md-8 col-md-offset-2")
        if nb == 2:
            classesAbout.append(base + "col-md-5 col-md-offset-0")
            classesAbout.append(base + "col-md-5 col-md-offset-2")
        if nb == 3:
            classesAbout.append(base + "col-md-4 col-md-offset-0")
            classesAbout.append(classesAbout[0])
            classesAbout.append(classesAbout[0])
        return classesAbout
