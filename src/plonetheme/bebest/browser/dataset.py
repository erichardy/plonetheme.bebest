# -*- coding: utf-8 -*-

import logging
from plone import api
from zope.publisher.browser import BrowserView
from plone.namedfile import NamedBlobImage
from os.path import join, abspath, dirname, basename
from plone.i18n.normalizer.interfaces import INormalizer
from zope.component import getUtility
from zope.intid.interfaces import IIntIds
from z3c.relationfield.relation import RelationValue

from data import portraits, projects

PREFIX = abspath(dirname(__file__))
logger = logging.getLogger('plonetheme.bebest: CREATEDATASET')

def input_image_path(f):
    return join(PREFIX, '../tests/images/', f)


class createDataSet(BrowserView):

    def __call__(self):
        portal = api.portal.get()
        # self.deletePortraits()
        # self.createPortraits()
        self.deleteProject()
        self.createProject()
        
        url = portal.absolute_url()
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
            logger.info(title)
            thumb_pict = NamedBlobImage()
            # import pdb;pdb.set_trace()
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
                                 subtitle=project['subtitle'],
                                 categories=project['categories'],
                                 start_date=project['start_date'],
                                 end_date=project['end_date'],
                                 presentation=project['presentation'],
                                 display_en=project['display_en'],
                                 presentation_en=project['presentation_en'],
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
        # obj.primary_contact.to_id = allPortraits[0]
        obj.contact_fr = RelationValue(allPortraits[1])
        # obj.contact_fr.to_id = allPortraits[1]
        obj.contact_ca = RelationValue(allPortraits[2])
        # obj.contact_ca.to_id = allPortraits[2]
        
        obj.reindexObject()

    def createMissions(self):
        pass

