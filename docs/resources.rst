
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






.. _Divers problèmes avec les ressources:

Divers problèmes avec les ressources
====================================

Qu'il s'agisse de `bootstrap`_ ou de `leaflet`_ il est nécessaire de disposer, pour chacun d'eux
d'un fichier ``javascript`` **ET** d'un fichier ``css``.

bootstrap
---------

Dans les exemples trouvés sur l'utilisation de `bootstrap`_, les choix ont été faits de
charger ``js/bootstrap.js`` directement dans le fichier de thème.

Cependant, le fichier ``bootstrap.css`` est compilé avec les autres ressources ``less`` du
thème 





