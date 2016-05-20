
.. include:: links.rst

==================================
Documentation de plonetheme.bebest
==================================
.. _IUEM: http://www-iuem.univ-brest.fr
.. _DocPlone: http://docs.plone.org/about/documentation_styleguide_addons.html
.. _Sphinx: http://sphinx-doc.org/

Documentation de ``plonetheme.bebest`` dévéloppé à l'`IUEM`_.

Voir les recommandations pour la documentation a `DocPlone`_

Voir aussi Sphinx : `Sphinx`_


Installation
============
Ajouter *plonetheme.bebest* à la liste définie par la variable ``eggs`` dans la
section ``[instance]`` du fichier *buildout.cfg*

et la source dans la section ``[sources]``::

   plonetheme.bebest = git gitiuem:plonetheme.bebest.git

Motivation
==========

Le module plonetheme.bebest a été dévéloppe sur la demande de Jennifer Guarini et
Laurent Chauvaud pour le projet **bebest**.

Sébastien Hervé a pris en charge la partie design et Eric Hardy l'implémentation
de ce design, le développement des types de contenus et l'installation de la
plateforme.

Ce module est développé pour Plone 5 (5.0.4 au 20/05/2106)


Toute la documentation
======================

.. toctree::
    :maxdepth: 2

    Le Thème <theme>
    Les resources JS et CSS <resources>
    Les types de contenu <content_types>
    LICENSE

.. links:

Liens utiles
============

* `Mastering Plone 5 (Theming)`_



.. _todo:

TODO
====

* ajouter des variables ``less`` pour une customisation en ligne (cf
  Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/profiles/dependencies/registry.xml, ligne 972)

* créer un *vrai* portlet pour le *footer*

* améliorer *dropdown menu* pour avoir les sous-menus

* mieux utiliser ``registry.xml`` et ``manifest.cfg``

* améliorer le thème pour qu'il prenne en compte les portlets (à gauche
  et à droite). Pour cela, voir les implémentations faites dans ``plonetheme.dellec``
  (en l'améliorant) et ``barceloneta``
    