# -*- coding: utf-8 -*-

import logging
from plone import api
from zope.publisher.browser import BrowserView
from plone.namedfile import NamedBlobImage
from os.path import join, abspath, dirname
# from plone.i18n.normalizer.interfaces import INormalizer
from zope.component import getUtility
from zope.intid.interfaces import IIntIds
from z3c.relationfield.relation import RelationValue

from data import portraits, projects, missions, bio_fr, lorem, sts

PREFIX = abspath(dirname(__file__))
logger = logging.getLogger('plonetheme.bebest: CREATEDATASET')


def input_image_path(f):
    return join(PREFIX, '../tests/images/', f)


class createDataSet(BrowserView):

    def __call__(self):
        portal = api.portal.get()
        self.deletePortraits()
        self.createPortraits()
        self.deleteProject()
        self.createProject()
        self.deletePortFolio()
        self.createPortFolio()
        self.deleteStudySite()
        self.createStudySite()

        url = portal.absolute_url() + '/folder_contents'
        self.request.response.redirect(url)

    def deletePortraits(self):
        portal = api.portal.get()
        try:
            api.content.delete(obj=portal['portraits'])
        except Exception:
            pass

    def createPortraits(self):
        portal = api.portal.get()
        portraitsFolder = api.content.create(type='Folder',
                                             title='Portraits',
                                             container=portal)

        for portrait in portraits:
            title = portrait['family_name'] + '-' + portrait['first_name']
            obj = api.content.create(type='bebest.portrait',
                                     title=title,
                                     family_name=portrait['family_name'],
                                     first_name=portrait['first_name'],
                                     email=portrait['email'],
                                     main_pict=NamedBlobImage(),
                                     pict_author=portrait['pict_author'],
                                     thumb_pict=NamedBlobImage(),
                                     bio_fr=portrait['bio_fr'],
                                     display_en=portrait['display_en'],
                                     bio_en=portrait['bio_en'],
                                     jobs=portrait['jobs'],
                                     status=portrait['status'],
                                     affiliation1=portrait['affiliation1'],
                                     affiliation2=portrait['affiliation2'],
                                     affiliation3=portrait['affiliation3'],
                                     personal_page=portrait['personal_page'],
                                     unit_page=portrait['unit_page'],
                                     research=portrait['research'],
                                     container=portraitsFolder,
                                     )
            path_main = input_image_path(portrait['main_pict'])
            fd = open(path_main, "r")
            obj.main_pict.data = fd.read()
            fd.close()
            obj.main_pict.filename = portrait['main_pict']
            obj.reindexObject()

            path_thumb = input_image_path(portrait['thumb_pict'])
            fd = open(path_thumb, "r")
            obj.thumb_pict.data = fd.read()
            fd.close()
            obj.thumb_pict.filename = portrait['thumb_pict']
            obj.reindexObject()
            logger.info(obj.title + ' Created')

    def getPortraits(self):
        portal = api.portal.get()
        intids = getUtility(IIntIds)
        founds = api.content.find(context=portal,
                                  portal_type='bebest.portrait',
                                  path='/'.join(portal.getPhysicalPath())
                                  )
        p_ids = []
        for found in founds:
            p_ids.append(intids.getId(found.getObject()))
        return p_ids

    def getMissions(self):
        portal = api.portal.get()
        intids = getUtility(IIntIds)
        founds = api.content.find(context=portal,
                                  portal_type='bebest.mission',
                                  path='/'.join(portal.getPhysicalPath())
                                  )
        p_ids = []
        for found in founds:
            p_ids.append(intids.getId(found.getObject()))
        return p_ids

    def deleteProject(self):
        portal = api.portal.get()
        try:
            api.content.delete(obj=portal['mon-projet'])
        except Exception:
            pass

    def createProject(self):
        portal = api.portal.get()
        project = projects[0]
        obj = api.content.create(type='bebest.project',
                                 title=project['title'],
                                 description=project['description'],
                                 categories=set(project['categories']),
                                 start_date=project['start_date'],
                                 end_date=project['end_date'],
                                 description_fr=project['description_fr'],
                                 display_en=project['display_en'],
                                 description_en=project['description_en'],
                                 main_pict=NamedBlobImage(),
                                 pict_author=project['pict_author'],
                                 zoom=project['zoom'],
                                 map_center=project['map_center'],
                                 container=portal)
        path_main = input_image_path(project['main_pict'])
        fd = open(path_main, "r")
        obj.main_pict.data = fd.read()
        fd.close()
        obj.main_pict.filename = project['main_pict']
        obj.reindexObject()
        allPortraits = self.getPortraits()
        obj.primary_contact = RelationValue(allPortraits[0])
        obj.contact_fr = RelationValue(allPortraits[1])
        obj.contact_ca = RelationValue(allPortraits[2])
        obj.reindexObject()
        logger.info(obj.title + ' Created')
        self.createMissions(obj)

    def createMissions(self, project):
        for mission in missions:
            obj = api.content.create(
                type='bebest.mission',
                title=mission['title'],
                description=mission['description'],
                start_date=mission['start_date'],
                end_date=mission['end_date'],
                presentation=mission['presentation'],
                display_en=mission['display_en'],
                presentation_en=mission['presentation_en'],
                main_pict=NamedBlobImage(),
                pict_author=mission['pict_author'],
                doc=mission['doc'],
                zoom=mission['zoom'],
                map_center=mission['map_center'],
                geojson=mission['geojson'],
                container=project
                )
            path_main = input_image_path(mission['main_pict'])
            fd = open(path_main, "r")
            obj.main_pict.data = fd.read()
            fd.close()
            obj.main_pict.filename = mission['main_pict']
            obj.reindexObject()
            allPortraits = self.getPortraits()
            obj.chief = RelationValue(allPortraits[0])
            obj.other = set([RelationValue(allPortraits[1]),
                             RelationValue(allPortraits[2]),
                             RelationValue(allPortraits[3]),
                             RelationValue(allPortraits[4]),
                             ])
            obj.reindexObject()
            self.createCarousel(obj)
            logger.info(obj.title + ' Created')

    def _loadImage(self, objField, image):
        imgPath = image.split('/')
        if len(imgPath) > 1:
            title = imgPath[len(imgPath) - 1]
        else:
            title = image
        path = input_image_path(image)
        fd = open(path, "r")
        objField.data = fd.read()
        fd.close()
        objField.filename = title

    def _loadImagesInFolder(self, folderish, images):
        for img in images:
            imgPath = img.split('/')
            if len(imgPath) > 1:
                title = imgPath[len(imgPath) - 1]
            else:
                title = img
            image = api.content.create(type='Image',
                                       title=title,
                                       image=NamedBlobImage(),
                                       description=lorem,
                                       container=folderish)
            self._loadImage(image.image, img)
            image.reindexObject()
            api.content.transition(obj=image, transition='publish')
            image.reindexObject()

    def createCarousel(self, loc):
        carousel = api.content.create(type='Folder',
                                      title=u'carousel',
                                      container=loc)
        api.content.transition(obj=carousel, transition='publish')
        imgs = [u'spmiquelon/1.jpg', u'spmiquelon/2.jpg',
                u'spmiquelon/3.jpg', u'spmiquelon/4.jpg',
                u'spmiquelon/5.jpg', u'spmiquelon/6.jpg',
                u'spmiquelon/7.jpg', u'spmiquelon/8.jpg']
        self._loadImagesInFolder(carousel, imgs)
        logger.info(carousel.title + ' Created')

    def deletePortFolio(self):
        portal = api.portal.get()
        try:
            api.content.delete(obj=portal['mon-portfolio'])
        except Exception:
            pass

    def createPortFolio(self):
        portal = api.portal.get()
        portfolio = api.content.create(type='bebest.portfolio',
                                       title='Mon Portfolio',
                                       blabla=bio_fr,
                                       main_pict=NamedBlobImage(),
                                       thumb_pict=NamedBlobImage(),
                                       authors_pict_folder=u"authors",
                                       container=portal)
        self._loadImage(portfolio.main_pict, u'spmiquelon/1.jpg')
        self._loadImage(portfolio.thumb_pict, u'spmiquelon/2.jpg')
        imgs = [u'spmiquelon/1.jpg', u'spmiquelon/2.jpg',
                u'spmiquelon/3.jpg', u'spmiquelon/4.jpg',
                u'spmiquelon/5.jpg', u'spmiquelon/6.jpg',
                u'spmiquelon/7.jpg', u'spmiquelon/8.jpg']
        self._loadImagesInFolder(portfolio, imgs)
        authors = api.content.create(type='Folder',
                                     title='authors',
                                     container=portfolio)
        imgs = [u'amice-sq.jpg', u'gaumy-sq.jpg']
        self._loadImagesInFolder(authors, imgs)
        api.content.transition(obj=portfolio, transition='publish')
        api.content.transition(obj=authors, transition='publish')
        logger.info(portfolio.title + ' Created')

    def deleteStudySite(self):
        portal = api.portal.get()
        try:
            title = u'mon-joli-site-detudes'
            api.content.delete(obj=portal[title])
        except Exception:
            pass

    def createStudySite(self):
        portal = api.portal.get()
        stsite = api.content.create(type='bebest.studysite',
                                    title=sts['title'],
                                    description=sts['description'],
                                    presentation=sts['presentation'],
                                    display_en=sts['display_en'],
                                    presentation_en=sts['presentation_en'],
                                    main_pict=NamedBlobImage(),
                                    pict_author=sts['pict_author'],
                                    doc=sts['doc'],
                                    zoom=sts['zoom'],
                                    map_center=sts['map_center'],
                                    geojson=sts['geojson'],
                                    container=portal)
        allMissions = self.getMissions()
        stsite.missions = set([RelationValue(allMissions[1]),
                               RelationValue(allMissions[2]),
                               RelationValue(allMissions[3]),
                               RelationValue(allMissions[0]),
                               ])
        stsite.reindexObject()
        logger.info(stsite.title + ' Created')
