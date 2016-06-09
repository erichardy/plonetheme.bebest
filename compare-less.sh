#!/bin/sh

if [ $# != 1 ]
then
    echo "Parametre !"
    exit
fi

DEV="/Users/hardy/Dev/plonetheme.bebest/dev/css/"
THEME="/Users/hardy/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/"

diff ${DEV}$1 ${THEME}$1
