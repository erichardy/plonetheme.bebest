from plone.app.registry.browser.controlpanel import (RegistryEditForm,
                                                     ControlPanelFormWrapper)
from plonetheme.bebest.interfaces import IPlonethemeBebestSettings

from plonetheme.bebest import _


class IPlonethemeBebestSettingsForm(RegistryEditForm):
    schema = IPlonethemeBebestSettings
    label = _(u"plonetheme.bebest Settings")
    description = _(u"plonetheme.bebest Settings Description")

    """
    def updateFields(self):
        super(IIuemAgreementsSettingsForm, self).updateFields()

    def updateWidgets(self):
        super(IIuemAgreementsSettingsForm, self).updateWidgets()
    """


class IPlonethemeBebestSettingsControlPanel(ControlPanelFormWrapper):
    form = IPlonethemeBebestSettingsForm
