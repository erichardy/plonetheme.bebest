# -*- coding: utf-8 -*-

import logging
from plone import api

logger = logging.getLogger('bebest')


def isNotCurrentProfile(context):
    return context.readDataFile('plonethemebebest_marker.txt') is None


def post_install(context):
    """Post install script"""
    
    if isNotCurrentProfile(context):
        return
    # Do something during the installation of this package
    logger.info('Installation de BeBEst')
    imagesDir = 'src/plonetheme/bebest/theme/images/'
    logoBlanc = imagesDir + 'logos/logoblanc.svg'
    portal = api.portal.get()
    custom = portal['portal_skins']['custom']
    import pdb;pdb.set_trace()
    customContents = [f.getId() for f in custom.objectValues()]
    if 'images' not in customContents:
        custom.manage_addFolder('images', 'images')
        logger.info('create portal_skins/images')
    imagesContent = [f.getId() for f in custom['images'].objectValues()]
    if 'logoblanc.svg' not in imagesContent:
        flogoblanc = open(logoBlanc, 'r')
        logoBlanc = flogoblanc.read()
        custom['images'].manage_addFile('logoblanc.svg',
                                         logoBlanc,
                                         'logoblanc.svg')
        logger.info('create portal_skins/images/logoblanc.svg')
    
    try:
        carousel = portal['bebest-carousel']
    except:
        carousel = api.content.create(type='Folder',
                                      title='bebest-carousel',
                                      container=portal)
    carouselContent = [f.getId() for f in carousel.objectValues()]
    images = ['banner1.jpg', 'banner1.jpg', 'banner1.jpg']
    
    for image in images:
        if image not in carouselContent:
            fimg = open(imagesDir + 'carousel/home/' + image)
            img = fimg.read()
            api.content.create(type='Image',
                               title=image,
                               container=carousel,
                               image=img
                               )
                                             


"""
manage_addDTMLMethod
manage_addFolder
manage_addImage


"""