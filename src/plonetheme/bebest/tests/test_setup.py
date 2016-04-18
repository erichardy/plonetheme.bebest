# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from plonetheme.bebest.testing import PLONETHEME_BEBEST_INTEGRATION_TESTING  # noqa
from plone import api

import unittest2 as unittest


class TestSetup(unittest.TestCase):
    """Test that plonetheme.bebest is properly installed."""

    layer = PLONETHEME_BEBEST_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if plonetheme.bebest is installed with
        portal_quickinstaller."""
        self.assertTrue(self.installer.isProductInstalled('plonetheme.bebest'))

    def test_uninstall(self):
        """Test if plonetheme.bebest is cleanly uninstalled."""
        module = 'plonetheme.bebest'
        self.installer.uninstallProducts(['plonetheme.bebest'])
        self.assertFalse(self.installer.isProductInstalled(module))

    def test_browserlayer(self):
        """Test that IPlonethemeBebestLayer is registered."""
        from plonetheme.bebest.interfaces import IPlonethemeBebestLayer
        from plone.browserlayer import utils
        self.assertIn(IPlonethemeBebestLayer, utils.registered_layers())
