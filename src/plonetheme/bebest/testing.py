# -*- coding: utf-8 -*-
from plone.app.contenttypes.testing import PLONE_APP_CONTENTTYPES_FIXTURE
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PloneSandboxLayer
from plone.testing import z2
from zope.configuration import xmlconfig

import plonetheme.bebest


class PlonethemeBebestLayer(PloneSandboxLayer):

    defaultBases = (PLONE_APP_CONTENTTYPES_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        xmlconfig.file(
            'configure.zcml',
            plonetheme.bebest,
            context=configurationContext
        )

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'plonetheme.bebest:default')


PLONETHEME_BEBEST_FIXTURE = PlonethemeBebestLayer()


PLONETHEME_BEBEST_INTEGRATION_TESTING = IntegrationTesting(
    bases=(PLONETHEME_BEBEST_FIXTURE,),
    name='PlonethemeBebestLayer:IntegrationTesting'
)


PLONETHEME_BEBEST_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(PLONETHEME_BEBEST_FIXTURE,),
    name='PlonethemeBebestLayer:FunctionalTesting'
)


PLONETHEME_BEBEST_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        PLONETHEME_BEBEST_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='PlonethemeBebestLayer:AcceptanceTesting'
)
