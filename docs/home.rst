



===========================
La vue de la page d'accueil
===========================

La vue ``bebest_home`` est une vue additionnelle d'un type de contenu ``Document``.

Elle est déclarée comme vue dans ``browser.zcml``::

   <browser:page
      name="bebest_home"
      for="*"
      class=".bebesthome.bebestHome"
      template="bebest_home.pt"
      permission="zope2.View"
      />


Et déclarée comme vue d'un document dans ``profile/default/types/Document.xml``::

    <property name="view_methods" purge="false">
     <element value="document_view"/>
     <element value="bebest_home"/>
     <element value="bebest_page_view"/>
    </property>

 

Fonctionnement général de la page d'accueil
-------------------------------------------





Documentation du code
---------------------

.. autoclass:: plonetheme.bebest.browser.bebesthome.bebestHome
   :members: _getHomeObject, getCarouselText, getCarouselInterval,
    getCarouselLogoName, getCarouselImages, getCarouselThumbnails,
    getHomeNews, getAboutBgImage, getAboutUsDocuments, getAboutContainerClass,
    getAboutClasses, localText
    




