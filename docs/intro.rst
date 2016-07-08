
.. include:: links.rst



============
Introduction
============

Généralités
===========
Cette documentation présente le fonctionnement du site `BeBEST <http://www.liabebest.org>`_ à la fois
pour les utilisateurs et sur le plan technique.

Les deux types de documentations sont dans les mêmes pages, mais, généralement, dans des
paragraphes différents. Les utilisateurs pourront se passer de lire les informations
techniques !


Un petit glossaire technique
============================

Certains termes utilisés dans cette documentation peuvent être peu compris par
des non habitués aux termes couramment utilisés avec le CMS `Plone`_.


.. glossary::

   CMS
      *Content Managment System*, en français *Système de gestion de contenu*.
      C'est un type de plate-forme logicielle conçue pour des sites WEB et qui permet à
      des personnes qui ne connaissent pas les techniques du WEB de mettre du contenu
      dans un site. Il existe une très grand nombre de CMS, le site *BeBEST* est
      développé avec `Plone`_.

   Type de contenu
   type de contenu
   types de contenu
      il s'agit des divers éléments que l'on peut ajouter dans un site.
      La plateforme Plone propose *clé en main* un certain nombre de types de contenus comme
      un *dossier*, une *image* ou un *document*. Pour *BeBEST*, des types de contenus spécifiques
      ont été développés : *mission*, *portrait*, *projet*, *site d'étude*, *portfolio*.

   Vue
      présentation d'un type de contenu. Par exemple, un document peut être présenté de
      plusieurs façons différentes. Il en est de même pour un dossier qui, quand on l'ouvre,
      peut présenter sont contenu réel, mais on peut aussi, avec des vues spécifiques, montrer des choses
      très différentes (par exemple, seulement les portraits qui y sont contenus).

   Behavior
      c'est un concept qui est apparu assez récemment dans Plone. Il consiste
      à avoir la possibilité d'ajouter facilement des fonctionnalités à un type de contenu sans
      avoir à reprogrammer le type de contenu. De plus on peut appliquer un même **behavior** à
      des types de contenus différents. Par exemple, la possibilité d'avoir une version anglaise
      pour un document et une actualité.

   Collection
      c'est un type de contenu qui permet de **collecter** des éléments d'un site et de les
      montrer. Cela ressemble donc à un dossier *intelligent*. Par exemple, on configure
      une collection et lui indiquant de montrer tous les éléments du site qui sont de
      type *mission* et qui sont publiés. Une collection, en tant que telle, ne contient
      rien, mais montre les éléments spécifiés en fonction de sa configuration.

