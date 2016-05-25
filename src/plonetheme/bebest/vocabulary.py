# -*- coding: utf-8 -*-

from zope.interface import implements

from zope.schema.interfaces import IVocabularyFactory

from zope.schema.vocabulary import SimpleTerm, SimpleVocabulary
from plone import api
from plone.i18n.normalizer.interfaces import INormalizer
from zope.component import getUtility
import logging

logger = logging.getLogger('bebest')


def make_terms(terms, termsList):
    normalizer = getUtility(INormalizer)
    for term in termsList:
        norm = normalizer.normalize(term)
        terms.append(SimpleTerm(value=norm, token=norm, title=term))
    return terms


def make_voc(terms, linesstr):
    return SimpleVocabulary(make_terms(terms, linesstr))


def make_voc_with_blank(terms, linesstr):
    terms.append(SimpleTerm(None, '', u""))
    # import pdb;pdb.set_trace()
    return SimpleVocabulary(make_terms(terms, linesstr))


class _Jobs(object):
    """Voc. without grok"""
    implements(IVocabularyFactory)

    def __call__(self, context):
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.jobs'
        xjobs = api.portal.get_registry_record(prefix)
        terms = []
        voc = make_voc(terms, xjobs)
        # import pdb;pdb.set_trace()
        return voc


class _localPortraits(object):
    implements(IVocabularyFactory)

    def __call__(self, context):
        logger.info(context.absolute_url())
        portraits = ['a', 'b']
        terms = []
        voc = make_voc(terms, portraits)
        return voc


class _projectCategories(object):
    implements(IVocabularyFactory)

    def __call__(self, context):
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.project_categories'
        xjobs = api.portal.get_registry_record(prefix)
        terms = []
        voc = make_voc(terms, xjobs)
        # import pdb;pdb.set_trace()
        return voc


class _geometry_types(object):
    implements(IVocabularyFactory)

    def __call__(self, context):
        geo_types = []
        geo_types.append("Point")
        geo_types.append("MultiPoint")
        geo_types.append("LineString")
        geo_types.append("MultiLineString")
        geo_types.append("Polygon")
        geo_types.append("MultiPolygon")
        terms = []
        voc = make_voc(terms, geo_types)
        return voc

class _portfolio_bg(object):
    implements(IVocabularyFactory)

    def __call__(self, context):
        prefix = 'plonetheme.bebest.interfaces.'
        prefix += 'IPlonethemeBebestSettings.portfolio_bg_classes'
        bg = api.portal.get_registry_record(prefix)
        terms = []
        voc = make_voc(terms, bg)
        # import pdb;pdb.set_trace()
        return voc

jobs = _Jobs()
projectCategories = _projectCategories()
localPortraits = _localPortraits()
geometry_types = _geometry_types()
portfolio_bg = _portfolio_bg()
