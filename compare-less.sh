#!/bin/sh

if [ $# != 1 ]
then
    echo "Nom du fichier LESS en parametre, ou ALL"
    exit
fi

FILES="bebest-general.less bebest-imports.less bebest-map.less bebest-portfolio.less bebest-home.less bebest-layout.less bebest-portrait.less bebest-typo.less"

DEV="/Users/hardy/Dev/plonetheme.bebest/dev/css/"
THEME="/Users/hardy/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/"

if [ $1 = "ALL" ]
then
    for FILE in $FILES
    do
        echo '------------------------------------------------'
        echo $FILE
        diff ${DEV}$FILE ${THEME}$FILE
    done
else
    diff ${DEV}$1 ${THEME}$1
fi

