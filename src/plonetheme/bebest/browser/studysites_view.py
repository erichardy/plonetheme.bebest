# -*- coding: utf-8 -*-

import logging
from zope.publisher.browser import BrowserView
# from operator import attrgetter
from plone import api

from plonetheme.bebest.utils import sort_by_position

logger = logging.getLogger('bebest')


class studySitesView(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def getStudySitesObjs(self,
                          effective=False):
        """
        :param effective: si ``True``, tri par date de publication
        :type effective: Boolean
        :return: liste des sites d'étude triés par disposition dans le
          dossier, ou par ordre de date de publication. Pour les sites
          d'étude, c'est la date de publication qui est choisie.
        """
        portal = api.portal.get()
        founds = api.content.find(context=portal,
                                  portal_type='bebest.studysite',
                                  path='/'.join(portal.getPhysicalPath()),
                                  depth=9,
                                  )
        # logger.info(founds)
        if len(founds) == 0:
            return False
        objs = [found.getObject() for found in founds]
        if effective:
            sortedObjs = sorted(objs,
                                key=lambda obj: obj.effective(),
                                reverse=True)
            return sortedObjs
        return sorted(objs, sort_by_position)
