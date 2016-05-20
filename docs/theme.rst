
.. include:: links.rst

========
Le thème
========

Le tème de ce module est un thème `Diazo`_ et est installé dans le répertoire ``theme``. Il est basé
sur `bootstrap`_ version 3.3.6.

.. note:: la version 4 de bootstrap et sortie mais en raison de sa *jeunesse* et du fait
   qu'une large communauté connait la version 3, le choix est fait de rester à celle-ci.
   D'autre part, le thème de base de Plone (barcelonetta), dont certains éléments sont utilisés,
   est basé sur une version 3 de bootstrap.

Les spécificités de ce thème sont les suivantes :

* le fichier de règles est ``rules.xml``

* le fichier de thème est ``bebest.html`` (en remplacement du fichier habituel ``index.html``)

* Pour les menus déroulants, le module ``webcouturier.dropdownmenu`` est acivé. Cependant, la version
  courante de ce module n'est pas compatible avec plone 5. C'est donc une branche spéciale qui est
  chargée ici::
  
    webcouturier.dropdownmenu = git git://github.com/collective/webcouturier.dropdownmenu.git branch=plone5

* pour la mise en oeuvre des sous-menus, des règles spéciales s'appliquent via le fichier de règles
  ``navigation-rules.xml``::
  
   <replace css:theme-children="div#div-navbar ul#navbar">
      <xsl:for-each css:select="ul#portal-globalnav > li">
        <xi:include href="navigation-rules.xml"/>
      </xsl:for-each>
   </replace>

* on notera aussi qu'il n'y a qu'un seul niveau de menus déroulants. Les sous-menus ne sont pas *possibles*

* ce thème n'est pas prévu pour utiliser les portlets dans les colonnes de droite et gauche.
  (NB: le footer, en plone 5 est un gestionnaire de portlets).

.. note:: Il existe un thème diazo `bootstrap`_ qui sert d'exemple. D'autre part, le consortium
   *ploneintranet* a aussi mis en oeuvre un thème bootstrap. Les différentes configurations
   mises en ouvre ici sont fortement inspirées de ces travaux.

=====================================
Le fichier de thème : ``bebest.html``
=====================================








