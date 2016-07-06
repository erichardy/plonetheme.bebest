



=============================
Généralités sur les behaviors
=============================

Mise en oeuvre de ``behaviors`` standards
=========================================

Ajout de ``ILeadImage`` sur les types de contenu standards
----------------------------------------------------------

Le behavior ``ILeadImage`` a été ajouté sur les types de contenus suivants :

* Document

* Collection

* Event

* Folder

Il permet de disposer, pour chacun, d'une image qui pourra être affichée lors de son rendu.

Concrètement, ce behavior n'est pas utilisé de façon systématique pour tous les types de contenu, mais
il est utile pour les types suivants :

* ``Event`` : pour une vue des ``Events`` qui pourra être développée ultérieurement

* ``Folder`` : pour la vue ``portfolio`` qui a été développée avant que la décision soit prise de développer
  un type de contenu ``bebest.portfolio``.

Ce behavior est ajouté en ajoutant un élément à la propriété ``behavior`` dans le
fichier ``xml`` correspondant au type de contenu::

   <property name="behaviors" purge="false">
     <element value="plone.app.contenttypes.behaviors.leadimage.ILeadImage"/>
   </property>

Autres ``behaviors`` standards
------------------------------

Au types de contenus développés pour BeBEST, les 3 behaviors suivant ont été appliqués::

   <element value="plone.app.content.interfaces.INameFromTitle"/>
   <element value="collective.dexteritytextindexer.behavior.IDexterityTextIndexer" />
   <element value="plone.app.dexterity.behaviors.metadata.ICategorization" />


Les behaviors ``IEnglishText`` et ``IStartEndDates``
====================================================

Le behavior ``IEnglishText``
----------------------------

Il permet d'ajouter deux champs au type de contenu :

* une case à cocher pour décider si on veut voir la version anglaise d'un texte s'afficher

* un champ ``RichText`` qui est la version anglaise.

Ce behavior est appliqué aux types de contenu standard ``Document`` et ``News Item``.

.. note:: les types de contenu développés pour BeBEST disposent aussi de ces champs. Ils n'ont pas
   été mis en place pour ces contenus sous forme de behavior afin de choisir dans
   quel ``fieldset`` les placer dans les formulaires d'ajout et de modification. il sera
   bon, par la suite, de trouver comment on peut, a posteriori, placer des champs issus d'un
   behavior dans un fieldset de son choix.

Ce behavior s'applique avec la directive ``xml``::

   <property name="behaviors" purge="false">
     <element value="plonetheme.bebest.behaviors.englishtext.IEnglishText" />
     ...


.. autoclass:: plonetheme.bebest.behaviors.englishtext.IEnglishText


Le behavior ``IStartEndDates``
------------------------------

Ce bahavior permet d'ajouter des dates de début et dates de fin, indépendantes des dates
de publication ou autres dates standards.

De plus, un choix est proposé pour afficher ces dates ainsi que les heures. Dans certains cas
l'affichage des heures n'a aucun intérêt.


Il s'applique ici au ``News Item`` avec la directive ``xml``::

   <property name="behaviors" purge="false">
      ...
      <element value="plonetheme.bebest.behaviors.startenddates.IStartEndDates" />
      ...

.. autoclass:: plonetheme.bebest.behaviors.startenddates.IStartEndDates

Ce qu'il aurait aussi fallu faire...
------------------------------------

Les types de contenu ``bebest.mission``, ``bebest.project`` et ``bebest.studysite`` ont tous
les trois une carte à afficher avec :

* un paramètre de coordonnées de centrage de la carte

* un paramètre pour le facteur de zoom

* des données au format ``geojson``

Une factorisation a pu être faite en mettant en place une macro pour les vues des cartes de
ces types de contenu. Cependant, il aurait été bien de mettre aussi en place un behavior.










