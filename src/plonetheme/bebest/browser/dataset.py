# -*- coding: utf-8 -*-

import logging
from plone import api
from zope.publisher.browser import BrowserView

from plone.i18n.normalizer.interfaces import INormalizer

from data import portraits


class createDataSet(BrowserView):

    def __init__(self):
        self.portal = api.portal.get()
    
    def __call__(self):
        portraitsFolder = api.content.create(type='Document',
                                             title='My Content',
                                             container=self.portal)
        
        pass

    def createPortraits(self):
        pass

    def createProject(self):
        pass

    def createMissions(self):
        pass

