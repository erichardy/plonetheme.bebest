#!/bin/sh
PRODUCTNAME='plonetheme.bebest'
I18NDOMAIN=$PRODUCTNAME
EXCLUDE="--exclude theme"
# . /opt/hardy/.path

# Synchronise the .pot with the templates.
../../../bin/i18ndude rebuild-pot  --pot locales/${PRODUCTNAME}.pot --create ${I18NDOMAIN} .

# Synchronise the resulting .pot with the .po files
../../../bin/i18ndude sync --pot locales/${PRODUCTNAME}.pot locales/*/LC_MESSAGES/${PRODUCTNAME}.po

# A faire :
# i18ndude find-untranslated browser/*.pt | less

##### i18ndude rebuild-pot --pot locales/iuem.photorepository.pot --create iuem.photorepository
../../../bin/i18ndude rebuild-pot --pot locales/plone.pot --create plone .
../../../bin/i18ndude sync --pot locales/plone.pot locales/*/LC_MESSAGES/plone.po
