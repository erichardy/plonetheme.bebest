# -*- coding: utf-8 -*-

import logging
from zope.publisher.browser import BrowserView
# from operator import attrgetter
from plone import api

logger = logging.getLogger('bebest')


class portFolio(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def _getPortfolioObjs(self,
                          registry_record,
                          obj_type,
                          withtag=True,
                          effective=True):
        """
        @param registry_record:
        """
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.' + registry_record
        tag = api.portal.get_registry_record(prefix)
        portal = api.portal.get()
        founds = api.content.find(context=portal,
                                  portal_type=obj_type,
                                  depth=1,
                                  )
        logger.info(founds)
        if len(founds) == 0:
            return False
        objs = []
        for found in founds:
            obj = found.getObject()
            state = api.content.get_state(obj)
            if withtag:
                if (tag in obj.Subject()) and (state == 'published'):
                    objs.append(obj)
            else:
                if (tag not in obj.Subject()) and (state == 'published'):
                    objs.append(obj)
        if len(objs) == 0:
            return False
        if effective:
            sortedObjs = sorted(objs,
                                key=lambda obj: obj.effective(),
                                reverse=True)
            return sortedObjs
        return objs

    def getPortfolioAuthors(self):
        reg = 'portfolio_author_tag'
        authors = self._getPortfolioObjs(registry_record=reg,
                                         obj_type='Image',
                                         withtag=True,
                                         effective=True)
        return authors

    def getPortfolioImages(self):
        # portfolio_author_tag
        images = self._getPortfolioObjs(registry_record='portfolio_author_tag',
                                        obj_type='Image',
                                        withtag=False,
                                        effective=True)
        import pdb;pdb.set_trace()
        return images
