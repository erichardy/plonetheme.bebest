
.. include:: links.rst

.. _resources:

===============================
Les resources Javascript et CSS
===============================

Les ressources sont déclarées dans le fichier ``profiles/default/registry.xml``.

On y trouve donc :

* une première ressource qui contient un javascript spécifique à *bebest* et la ressource
  ``less`` à partir de laquelle la ressource ``css`` compilée est générée.

* une ressource pour charger ``leaflet``

* le *bundle* ``bebest`` qui contient les deux ressources précédentes.

.. note:: comme indiqué en commentaire dans le fichier ``registry.xml``, on a été confronté
   à un problème de chargement des différentes ressources. Ces problèmes sont détaillés
   ci-dessous : :ref:`Divers problèmes avec les ressources`

Un principe général des ressources sous plone 5 dit qu'il faut, par ressource, une
ressource ``javascript`` et 0 ou plusieurs ressources ``css``.

.. note:: Ici, deux ressources sont créées : une ressource ``bebest-main`` et une ressource
   ``leaflet``. Elles sont décrites ci-dessous ainsi que le *bundle* qui les englobe.

La ressource ``bebest-main``
----------------------------

Elle contient un javascript qui répond aux *exigences* de ``RequireJS``
et une ressource css qui est le résultat de la compilation des fichiers ``less``.

Le javascript est : ``theme/js/bebest.js``

Trois actions principales s'y trouvent :

* vérification si ``JQuery`` est déjà chargé pour ne pas le charger plusieurs fois

* mise en place des dépendances avec ``RequireJS``

* ajout d'une classe ``bebest-main`` au ``<body>`` des pages.

.. note:: A l'heure actuelle, c'est aussi par manque de maîtrise de ``RequireJS`` que
   ses fonctionnalités ne sont pas utilisées *à fond*.

Le fichier ``bebest-theme.less`` : c'est lui qui rassemble l'essentiel des ressources
``css/less`` du module. Selon le modèle qui a été développé lors de la session de
training à la *ploneconf* de 2015, on importe les différents composants venant de `barceloneta`
et le fichier se termine par l'import des ressources ``less`` spécifiques à *bebest*.

C'est cet ensemble de ressources ``less`` qui va générer ``bebest-compiled.min.css``.
(cf ci-dessous)

La ressource ``leaflet``
------------------------

Comme il est indiqué ci-dessous, il n'a pas été possible d'intégrer dans la même ressource
le javascript et la css de leaflet dans la même ressource.

Cette ressource, nommée ``leaflet`` ne contient donc que le fichier ``leafleat.js``.

Le bundle ``bebest``
--------------------

C'est, au final, ce bundle qui est pris en compte par plone. Il contient donc les deux ressources
dont il a été question ci-dessous, par les lignes suivantes::

   <value key="resources">
        <element>bebest-main</element>
        <element>leaflet</element>
   </value>

Ce bundle se matérialise par 2 fichiers déclarés dans la section de déclaration du bundle::

   <value key="jscompilation">++theme++plonetheme.bebest/js/bebest-compiled.min.js</value>
   <value key="csscompilation">++theme++plonetheme.bebest/css/bebest-compiled.min.css</value>

.. note:: les noms des fichiers ``js`` et ``css`` qui sont générés sont dépendants
   du nom du *bundle*. ``bebest`` étant le nom du bundle, les fichiers générés sont
   **bebest**-compiled.min.js et **bebest**-compiled.min.css


L'implémentation de galleries (carousels) avec ``galleria``
-----------------------------------------------------------

Actuellement (mai 2016), `galleria`_ n'est pas inclu dans les ressources. Son utilisation
intervenant pour la gestion de carousels, qui sont développés dans la
template ``skins/bebest/bebest_macros.pt``, macro ``gallery``. Les ressources
nécessaires sont importées directement dans la template::

   <link rel="stylesheet" type="text/css" href="++theme++plonetheme.bebest/galleria/themes/classic/galleria.classic.css" />
   <script src="++theme++plonetheme.bebest/galleria/galleria-1.4.2.min.js"></script>
   <script src="++theme++plonetheme.bebest/galleria/themes/classic/galleria.classic.min.js"></script>


.. _Divers problèmes avec les ressources:

Divers problèmes avec les ressources
====================================

Qu'il s'agisse de `bootstrap`_ ou de `leaflet`_ il est nécessaire de disposer, pour chacun d'eux
d'un fichier ``javascript`` **ET** d'un fichier ``css``.

bootstrap
---------

Dans les exemples trouvés sur l'utilisation de `bootstrap`_, les choix qui ont été faits
consistent à charger ``js/bootstrap.js`` directement dans le fichier de thème. C'est cette
même stratégie qui a été mise en oeuvre ici.

Cependant, le fichier ``bootstrap.css`` est compilé avec les autres ressources ``less`` du
thème. Ce fichier est pris en compte dans le fichier ``bebest-theme.less``::

   @import (less) "bootstrap.css";

On retrouve donc les instructions css de bootstrap dans le bundle ``bebest`` qui
contient ``bebest-compiled.min.css`` généré lors de la compilation des fichiers ``less``


leaflet
-------

Leaflet est utilisé pour les cartes qui visualisent les emplacements des missions, projets et autres
sites d'études.

Une stratégie idéale aurait été de faire une ressource ``leaflet`` qui contienne la CSS et le javascript
de `leaflet`_. Or cette stratégie n'a pas fonctionné, probablement due au fait de l'ordre de
chargement des différentes ressources.

La ressource ``leaflet`` ne contient donc que le javascript. La css associée est chargée
dans les templates qui utilisent `leaflet`_ sous la forme::

   <link rel="stylesheet" type="text/css" href="++theme++plonetheme.bebest/css/leaflet.css" />



