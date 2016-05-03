# -*- coding: utf-8 -*-

from zope.interface import implements

from zope.schema.interfaces import IVocabularyFactory

from zope.schema.vocabulary import SimpleTerm, SimpleVocabulary
from plone import api
from plone.i18n.normalizer.interfaces import INormalizer
from zope.component import getUtility


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


jobs = _Jobs()
