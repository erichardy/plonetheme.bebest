# -*- coding: utf-8 -*-

import logging
from plone import api
from plone.namedfile.file import NamedBlobImage as nbi

logger = logging.getLogger('bebest')


def isNotCurrentProfile(context):
    return context.readDataFile('plonethemebebest_marker.txt') is None


def installInCustom(obj_folder,
                    obj_id,
                    obj_type='Image',
                    skins_container='images'):
    """Install objects (i.e. images) in portal_skins/container/...
    Used for images installation at product activation.
    Default folder for skins_container : images
    obj_type is Image or File
    """
    portal = api.portal.get()
    custom = portal['portal_skins']['custom']
    try:
        container = custom[skins_container]
    except Exception:
        if skins_container:
            custom.manage_addFolder(skins_container, skins_container)
            container = custom[skins_container]
        else:
            msg = 'Unable to install ' + str(obj_id)
            msg += ' in portal_skins/custom/' + str(skins_container)
            logger.info(msg)
            return
    containerContents = [f.getId() for f in container.objectValues()]
    if obj_id not in containerContents:
        try:
            fobj_data = open(obj_folder + '/' + obj_id, "r")
            obj_data = fobj_data.read()
            if obj_type == 'Image':
                container.manage_addImage(obj_id, obj_data, obj_id)
            if obj_type == 'File':
                container.manage_addFile(obj_id, obj_data, obj_id)
            msg = obj_folder + '/' + obj_id
            msg += ' installed in ' + skins_container
            logger.info(msg)
        except Exception:
            msg = 'WARNING : cannot install ' + obj_folder + '/' + obj_id
            msg += ' in ' + skins_container
            logger.info(msg)


def post_install(context):
    """Post install script"""

    if isNotCurrentProfile(context):
        return
    # Do something during the installation of this package
    # logger.info('Installation de BeBEst')
    installInCustom('src/plonetheme/bebest/theme/images/logos',
                    'logoblanc.svg',
                    obj_type='File')
    installInCustom('src/plonetheme/bebest/theme/images/about/',
                    'csj-soft.png',
                    obj_type='Image')
    
    carouselDir = 'src/plonetheme/bebest/theme/images/carousel/home/'
    installImages('bebest-carousel', carouselDir)


def installImages(folder, imagesDir):
    """
    Install in portal ``folder`` all images in ``imagesDir``.
    imagesDir is a folder on the filesystem.
    NB: ``folder`` must be at portal root (yes, it's a limit !)
    """
    portal = api.portal.get()
    try:
        folder = portal['bebest-carousel']
    except:
        folder = api.content.create(type='Folder',
                                      title='bebest-carousel',
                                      container=portal)
    carouselContent = [f.getId() for f in folder.objectValues()]
    for c in carouselContent:
        # if image(s) already present in carousel, do nothing
        if folder.get(c).portal_type == 'Image':
            logger.info('Images already present in carousel')
            return
    images = [u'banner1.jpg', u'banner2.jpg', u'banner3.jpg']

    for image in images:
        if image not in carouselContent:
            fimg = open(imagesDir + '/' + image)
            img = fimg.read()
            fimg.close()
            """
            carousel.invokeFactory(id=image,
                                   title=image,
                                   type_name='Image')
            i = carousel.get(image)
            """

            blobScore = nbi(img,
                            contentType=u'image/png',
                            filename=image)
            i = api.content.create(type='Image',
                                   title=image,
                                   container=folder,
                                   image=blobScore
                                   )
            # i.image = blobScore
            i.reindexObject()


"""
manage_addDTMLMethod
manage_addFolder
manage_addImage
"""
