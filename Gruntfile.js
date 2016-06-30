
module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            
            "bebest": {
                files: [
                    {"/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css": ["/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-theme.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "bebest-compiled.min.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/plonetheme.bebest",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "barceloneta-accessibility": "'accessibility.plone.less'",
                      "barceloneta-alerts": "'alerts.plone.less'",
                      "barceloneta-all": "'barceloneta.plone.export.less'",
                      "barceloneta-behaviors": "'behaviors.plone.less'",
                      "barceloneta-breadcrumbs": "'breadcrumbs.plone.less'",
                      "barceloneta-buttons": "'buttons.plone.less'",
                      "barceloneta-code": "'code.plone.less'",
                      "barceloneta-contents": "'contents.plone.less'",
                      "barceloneta-controlpanels": "'controlpanels.plone.less'",
                      "barceloneta-deco": "'deco.plone.less'",
                      "barceloneta-discussion": "'discussion.plone.less'",
                      "barceloneta-dropzone": "'dropzone.plone.less'",
                      "barceloneta-event": "'event.plone.less'",
                      "barceloneta-fonts": "'fonts.plone.less'",
                      "barceloneta-footer": "'footer.plone.less'",
                      "barceloneta-forms": "'forms.plone.less'",
                      "barceloneta-formtabbing": "'formtabbing.plone.less'",
                      "barceloneta-grid": "'grid.plone.less'",
                      "barceloneta-header": "'header.plone.less'",
                      "barceloneta-image": "'image.plone.less'",
                      "barceloneta-loginform": "'loginform.plone.less'",
                      "barceloneta-main": "'main.plone.less'",
                      "barceloneta-mixin-borderradius": "'mixin.borderradius.plone.less'",
                      "barceloneta-mixin-buttons": "'mixin.buttons.plone.less'",
                      "barceloneta-mixin-clearfix": "'mixin.clearfix.plone.less'",
                      "barceloneta-mixin-font": "'mixin.font.plone.less'",
                      "barceloneta-mixin-forms": "'mixin.forms.plone.less'",
                      "barceloneta-mixin-grid": "'mixin.grid.plone.less'",
                      "barceloneta-mixin-gridframework": "'mixin.gridframework.plone.less'",
                      "barceloneta-mixin-images": "'mixin.images.plone.less'",
                      "barceloneta-mixin-prefixes": "'mixin.prefixes.plone.less'",
                      "barceloneta-mixin-tabfocus": "'mixin.tabfocus.plone.less'",
                      "barceloneta-modal": "'modal.plone.less'",
                      "barceloneta-normalize": "'normalize.plone.less'",
                      "barceloneta-pagination": "'pagination.plone.less'",
                      "barceloneta-pickadate": "'pickadate.plone.less'",
                      "barceloneta-portlets": "'portlets.plone.less'",
                      "barceloneta-print": "'print.plone.less'",
                      "barceloneta-scaffolding": "'scaffolding.plone.less'",
                      "barceloneta-search": "'search.plone.less'",
                      "barceloneta-sitemap": "'sitemap.plone.less'",
                      "barceloneta-sitenav": "'sitenav.plone.less'",
                      "barceloneta-sortable": "'sortable.plone.less'",
                      "barceloneta-states": "'states.plone.less'",
                      "barceloneta-tables": "'tables.plone.less'",
                      "barceloneta-tablesorter": "'tablesorter.plone.less'",
                      "barceloneta-tags": "'tags.plone.less'",
                      "barceloneta-thumbs": "'thumbs.plone.less'",
                      "barceloneta-toc": "'toc.plone.less'",
                      "barceloneta-tooltip": "'tooltip.plone.less'",
                      "barceloneta-tree": "'tree.plone.less'",
                      "barceloneta-type": "'type.plone.less'",
                      "barceloneta-variables": "'variables.plone.less'",
                      "barceloneta-views": "'views.plone.less'",
                      "bebest-main": "'bebest-theme.less'",
                      "bebest-toolbar-bg": "rgba(0,0,0,.9)",
                      "bebest-toolbar-font-primary": "sans-serif",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-plone-app-event-event-css": "'ee450a33312f44f2956f423c05ae73a5.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier_dropdownmenu": "'dropdown.less'",

                    }
                }
            }
,
            "layouts-editor": {
                files: [
                    {"/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css": ["/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css/layouts-editor.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "layouts-editor.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/plonetheme.bebest",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "barceloneta-accessibility": "'accessibility.plone.less'",
                      "barceloneta-alerts": "'alerts.plone.less'",
                      "barceloneta-all": "'barceloneta.plone.export.less'",
                      "barceloneta-behaviors": "'behaviors.plone.less'",
                      "barceloneta-breadcrumbs": "'breadcrumbs.plone.less'",
                      "barceloneta-buttons": "'buttons.plone.less'",
                      "barceloneta-code": "'code.plone.less'",
                      "barceloneta-contents": "'contents.plone.less'",
                      "barceloneta-controlpanels": "'controlpanels.plone.less'",
                      "barceloneta-deco": "'deco.plone.less'",
                      "barceloneta-discussion": "'discussion.plone.less'",
                      "barceloneta-dropzone": "'dropzone.plone.less'",
                      "barceloneta-event": "'event.plone.less'",
                      "barceloneta-fonts": "'fonts.plone.less'",
                      "barceloneta-footer": "'footer.plone.less'",
                      "barceloneta-forms": "'forms.plone.less'",
                      "barceloneta-formtabbing": "'formtabbing.plone.less'",
                      "barceloneta-grid": "'grid.plone.less'",
                      "barceloneta-header": "'header.plone.less'",
                      "barceloneta-image": "'image.plone.less'",
                      "barceloneta-loginform": "'loginform.plone.less'",
                      "barceloneta-main": "'main.plone.less'",
                      "barceloneta-mixin-borderradius": "'mixin.borderradius.plone.less'",
                      "barceloneta-mixin-buttons": "'mixin.buttons.plone.less'",
                      "barceloneta-mixin-clearfix": "'mixin.clearfix.plone.less'",
                      "barceloneta-mixin-font": "'mixin.font.plone.less'",
                      "barceloneta-mixin-forms": "'mixin.forms.plone.less'",
                      "barceloneta-mixin-grid": "'mixin.grid.plone.less'",
                      "barceloneta-mixin-gridframework": "'mixin.gridframework.plone.less'",
                      "barceloneta-mixin-images": "'mixin.images.plone.less'",
                      "barceloneta-mixin-prefixes": "'mixin.prefixes.plone.less'",
                      "barceloneta-mixin-tabfocus": "'mixin.tabfocus.plone.less'",
                      "barceloneta-modal": "'modal.plone.less'",
                      "barceloneta-normalize": "'normalize.plone.less'",
                      "barceloneta-pagination": "'pagination.plone.less'",
                      "barceloneta-pickadate": "'pickadate.plone.less'",
                      "barceloneta-portlets": "'portlets.plone.less'",
                      "barceloneta-print": "'print.plone.less'",
                      "barceloneta-scaffolding": "'scaffolding.plone.less'",
                      "barceloneta-search": "'search.plone.less'",
                      "barceloneta-sitemap": "'sitemap.plone.less'",
                      "barceloneta-sitenav": "'sitenav.plone.less'",
                      "barceloneta-sortable": "'sortable.plone.less'",
                      "barceloneta-states": "'states.plone.less'",
                      "barceloneta-tables": "'tables.plone.less'",
                      "barceloneta-tablesorter": "'tablesorter.plone.less'",
                      "barceloneta-tags": "'tags.plone.less'",
                      "barceloneta-thumbs": "'thumbs.plone.less'",
                      "barceloneta-toc": "'toc.plone.less'",
                      "barceloneta-tooltip": "'tooltip.plone.less'",
                      "barceloneta-tree": "'tree.plone.less'",
                      "barceloneta-type": "'type.plone.less'",
                      "barceloneta-variables": "'variables.plone.less'",
                      "barceloneta-views": "'views.plone.less'",
                      "bebest-main": "'bebest-theme.less'",
                      "bebest-toolbar-bg": "rgba(0,0,0,.9)",
                      "bebest-toolbar-font-primary": "sans-serif",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-plone-app-event-event-css": "'ee450a33312f44f2956f423c05ae73a5.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier_dropdownmenu": "'dropdown.less'",

                    }
                }
            }
,
            "mosaic": {
                files: [
                    {"/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css": ["/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css/mosaic.pattern.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "plone-mosaic.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/plonetheme.bebest",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "barceloneta-accessibility": "'accessibility.plone.less'",
                      "barceloneta-alerts": "'alerts.plone.less'",
                      "barceloneta-all": "'barceloneta.plone.export.less'",
                      "barceloneta-behaviors": "'behaviors.plone.less'",
                      "barceloneta-breadcrumbs": "'breadcrumbs.plone.less'",
                      "barceloneta-buttons": "'buttons.plone.less'",
                      "barceloneta-code": "'code.plone.less'",
                      "barceloneta-contents": "'contents.plone.less'",
                      "barceloneta-controlpanels": "'controlpanels.plone.less'",
                      "barceloneta-deco": "'deco.plone.less'",
                      "barceloneta-discussion": "'discussion.plone.less'",
                      "barceloneta-dropzone": "'dropzone.plone.less'",
                      "barceloneta-event": "'event.plone.less'",
                      "barceloneta-fonts": "'fonts.plone.less'",
                      "barceloneta-footer": "'footer.plone.less'",
                      "barceloneta-forms": "'forms.plone.less'",
                      "barceloneta-formtabbing": "'formtabbing.plone.less'",
                      "barceloneta-grid": "'grid.plone.less'",
                      "barceloneta-header": "'header.plone.less'",
                      "barceloneta-image": "'image.plone.less'",
                      "barceloneta-loginform": "'loginform.plone.less'",
                      "barceloneta-main": "'main.plone.less'",
                      "barceloneta-mixin-borderradius": "'mixin.borderradius.plone.less'",
                      "barceloneta-mixin-buttons": "'mixin.buttons.plone.less'",
                      "barceloneta-mixin-clearfix": "'mixin.clearfix.plone.less'",
                      "barceloneta-mixin-font": "'mixin.font.plone.less'",
                      "barceloneta-mixin-forms": "'mixin.forms.plone.less'",
                      "barceloneta-mixin-grid": "'mixin.grid.plone.less'",
                      "barceloneta-mixin-gridframework": "'mixin.gridframework.plone.less'",
                      "barceloneta-mixin-images": "'mixin.images.plone.less'",
                      "barceloneta-mixin-prefixes": "'mixin.prefixes.plone.less'",
                      "barceloneta-mixin-tabfocus": "'mixin.tabfocus.plone.less'",
                      "barceloneta-modal": "'modal.plone.less'",
                      "barceloneta-normalize": "'normalize.plone.less'",
                      "barceloneta-pagination": "'pagination.plone.less'",
                      "barceloneta-pickadate": "'pickadate.plone.less'",
                      "barceloneta-portlets": "'portlets.plone.less'",
                      "barceloneta-print": "'print.plone.less'",
                      "barceloneta-scaffolding": "'scaffolding.plone.less'",
                      "barceloneta-search": "'search.plone.less'",
                      "barceloneta-sitemap": "'sitemap.plone.less'",
                      "barceloneta-sitenav": "'sitenav.plone.less'",
                      "barceloneta-sortable": "'sortable.plone.less'",
                      "barceloneta-states": "'states.plone.less'",
                      "barceloneta-tables": "'tables.plone.less'",
                      "barceloneta-tablesorter": "'tablesorter.plone.less'",
                      "barceloneta-tags": "'tags.plone.less'",
                      "barceloneta-thumbs": "'thumbs.plone.less'",
                      "barceloneta-toc": "'toc.plone.less'",
                      "barceloneta-tooltip": "'tooltip.plone.less'",
                      "barceloneta-tree": "'tree.plone.less'",
                      "barceloneta-type": "'type.plone.less'",
                      "barceloneta-variables": "'variables.plone.less'",
                      "barceloneta-views": "'views.plone.less'",
                      "bebest-main": "'bebest-theme.less'",
                      "bebest-toolbar-bg": "rgba(0,0,0,.9)",
                      "bebest-toolbar-font-primary": "sans-serif",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-plone-app-event-event-css": "'ee450a33312f44f2956f423c05ae73a5.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier_dropdownmenu": "'dropdown.less'",

                    }
                }
            }
,
            "plone-logged-in": {
                files: [
                    {"/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css": ["/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "plone-logged-in-compiled.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/plonetheme.bebest",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "barceloneta-accessibility": "'accessibility.plone.less'",
                      "barceloneta-alerts": "'alerts.plone.less'",
                      "barceloneta-all": "'barceloneta.plone.export.less'",
                      "barceloneta-behaviors": "'behaviors.plone.less'",
                      "barceloneta-breadcrumbs": "'breadcrumbs.plone.less'",
                      "barceloneta-buttons": "'buttons.plone.less'",
                      "barceloneta-code": "'code.plone.less'",
                      "barceloneta-contents": "'contents.plone.less'",
                      "barceloneta-controlpanels": "'controlpanels.plone.less'",
                      "barceloneta-deco": "'deco.plone.less'",
                      "barceloneta-discussion": "'discussion.plone.less'",
                      "barceloneta-dropzone": "'dropzone.plone.less'",
                      "barceloneta-event": "'event.plone.less'",
                      "barceloneta-fonts": "'fonts.plone.less'",
                      "barceloneta-footer": "'footer.plone.less'",
                      "barceloneta-forms": "'forms.plone.less'",
                      "barceloneta-formtabbing": "'formtabbing.plone.less'",
                      "barceloneta-grid": "'grid.plone.less'",
                      "barceloneta-header": "'header.plone.less'",
                      "barceloneta-image": "'image.plone.less'",
                      "barceloneta-loginform": "'loginform.plone.less'",
                      "barceloneta-main": "'main.plone.less'",
                      "barceloneta-mixin-borderradius": "'mixin.borderradius.plone.less'",
                      "barceloneta-mixin-buttons": "'mixin.buttons.plone.less'",
                      "barceloneta-mixin-clearfix": "'mixin.clearfix.plone.less'",
                      "barceloneta-mixin-font": "'mixin.font.plone.less'",
                      "barceloneta-mixin-forms": "'mixin.forms.plone.less'",
                      "barceloneta-mixin-grid": "'mixin.grid.plone.less'",
                      "barceloneta-mixin-gridframework": "'mixin.gridframework.plone.less'",
                      "barceloneta-mixin-images": "'mixin.images.plone.less'",
                      "barceloneta-mixin-prefixes": "'mixin.prefixes.plone.less'",
                      "barceloneta-mixin-tabfocus": "'mixin.tabfocus.plone.less'",
                      "barceloneta-modal": "'modal.plone.less'",
                      "barceloneta-normalize": "'normalize.plone.less'",
                      "barceloneta-pagination": "'pagination.plone.less'",
                      "barceloneta-pickadate": "'pickadate.plone.less'",
                      "barceloneta-portlets": "'portlets.plone.less'",
                      "barceloneta-print": "'print.plone.less'",
                      "barceloneta-scaffolding": "'scaffolding.plone.less'",
                      "barceloneta-search": "'search.plone.less'",
                      "barceloneta-sitemap": "'sitemap.plone.less'",
                      "barceloneta-sitenav": "'sitenav.plone.less'",
                      "barceloneta-sortable": "'sortable.plone.less'",
                      "barceloneta-states": "'states.plone.less'",
                      "barceloneta-tables": "'tables.plone.less'",
                      "barceloneta-tablesorter": "'tablesorter.plone.less'",
                      "barceloneta-tags": "'tags.plone.less'",
                      "barceloneta-thumbs": "'thumbs.plone.less'",
                      "barceloneta-toc": "'toc.plone.less'",
                      "barceloneta-tooltip": "'tooltip.plone.less'",
                      "barceloneta-tree": "'tree.plone.less'",
                      "barceloneta-type": "'type.plone.less'",
                      "barceloneta-variables": "'variables.plone.less'",
                      "barceloneta-views": "'views.plone.less'",
                      "bebest-main": "'bebest-theme.less'",
                      "bebest-toolbar-bg": "rgba(0,0,0,.9)",
                      "bebest-toolbar-font-primary": "sans-serif",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-plone-app-event-event-css": "'ee450a33312f44f2956f423c05ae73a5.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier_dropdownmenu": "'dropdown.less'",

                    }
                }
            }
,
            "plone": {
                files: [
                    {"/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css": ["/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "plone-compiled.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/plonetheme.bebest",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "barceloneta-accessibility": "'accessibility.plone.less'",
                      "barceloneta-alerts": "'alerts.plone.less'",
                      "barceloneta-all": "'barceloneta.plone.export.less'",
                      "barceloneta-behaviors": "'behaviors.plone.less'",
                      "barceloneta-breadcrumbs": "'breadcrumbs.plone.less'",
                      "barceloneta-buttons": "'buttons.plone.less'",
                      "barceloneta-code": "'code.plone.less'",
                      "barceloneta-contents": "'contents.plone.less'",
                      "barceloneta-controlpanels": "'controlpanels.plone.less'",
                      "barceloneta-deco": "'deco.plone.less'",
                      "barceloneta-discussion": "'discussion.plone.less'",
                      "barceloneta-dropzone": "'dropzone.plone.less'",
                      "barceloneta-event": "'event.plone.less'",
                      "barceloneta-fonts": "'fonts.plone.less'",
                      "barceloneta-footer": "'footer.plone.less'",
                      "barceloneta-forms": "'forms.plone.less'",
                      "barceloneta-formtabbing": "'formtabbing.plone.less'",
                      "barceloneta-grid": "'grid.plone.less'",
                      "barceloneta-header": "'header.plone.less'",
                      "barceloneta-image": "'image.plone.less'",
                      "barceloneta-loginform": "'loginform.plone.less'",
                      "barceloneta-main": "'main.plone.less'",
                      "barceloneta-mixin-borderradius": "'mixin.borderradius.plone.less'",
                      "barceloneta-mixin-buttons": "'mixin.buttons.plone.less'",
                      "barceloneta-mixin-clearfix": "'mixin.clearfix.plone.less'",
                      "barceloneta-mixin-font": "'mixin.font.plone.less'",
                      "barceloneta-mixin-forms": "'mixin.forms.plone.less'",
                      "barceloneta-mixin-grid": "'mixin.grid.plone.less'",
                      "barceloneta-mixin-gridframework": "'mixin.gridframework.plone.less'",
                      "barceloneta-mixin-images": "'mixin.images.plone.less'",
                      "barceloneta-mixin-prefixes": "'mixin.prefixes.plone.less'",
                      "barceloneta-mixin-tabfocus": "'mixin.tabfocus.plone.less'",
                      "barceloneta-modal": "'modal.plone.less'",
                      "barceloneta-normalize": "'normalize.plone.less'",
                      "barceloneta-pagination": "'pagination.plone.less'",
                      "barceloneta-pickadate": "'pickadate.plone.less'",
                      "barceloneta-portlets": "'portlets.plone.less'",
                      "barceloneta-print": "'print.plone.less'",
                      "barceloneta-scaffolding": "'scaffolding.plone.less'",
                      "barceloneta-search": "'search.plone.less'",
                      "barceloneta-sitemap": "'sitemap.plone.less'",
                      "barceloneta-sitenav": "'sitenav.plone.less'",
                      "barceloneta-sortable": "'sortable.plone.less'",
                      "barceloneta-states": "'states.plone.less'",
                      "barceloneta-tables": "'tables.plone.less'",
                      "barceloneta-tablesorter": "'tablesorter.plone.less'",
                      "barceloneta-tags": "'tags.plone.less'",
                      "barceloneta-thumbs": "'thumbs.plone.less'",
                      "barceloneta-toc": "'toc.plone.less'",
                      "barceloneta-tooltip": "'tooltip.plone.less'",
                      "barceloneta-tree": "'tree.plone.less'",
                      "barceloneta-type": "'type.plone.less'",
                      "barceloneta-variables": "'variables.plone.less'",
                      "barceloneta-views": "'views.plone.less'",
                      "bebest-main": "'bebest-theme.less'",
                      "bebest-toolbar-bg": "rgba(0,0,0,.9)",
                      "bebest-toolbar-font-primary": "sans-serif",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-plone-app-event-event-css": "'ee450a33312f44f2956f423c05ae73a5.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier_dropdownmenu": "'dropdown.less'",

                    }
                }
            }
,
            "resourceregistry": {
                files: [
                    {"/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css": ["/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "resourceregistry-compiled.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/plonetheme.bebest",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "barceloneta-accessibility": "'accessibility.plone.less'",
                      "barceloneta-alerts": "'alerts.plone.less'",
                      "barceloneta-all": "'barceloneta.plone.export.less'",
                      "barceloneta-behaviors": "'behaviors.plone.less'",
                      "barceloneta-breadcrumbs": "'breadcrumbs.plone.less'",
                      "barceloneta-buttons": "'buttons.plone.less'",
                      "barceloneta-code": "'code.plone.less'",
                      "barceloneta-contents": "'contents.plone.less'",
                      "barceloneta-controlpanels": "'controlpanels.plone.less'",
                      "barceloneta-deco": "'deco.plone.less'",
                      "barceloneta-discussion": "'discussion.plone.less'",
                      "barceloneta-dropzone": "'dropzone.plone.less'",
                      "barceloneta-event": "'event.plone.less'",
                      "barceloneta-fonts": "'fonts.plone.less'",
                      "barceloneta-footer": "'footer.plone.less'",
                      "barceloneta-forms": "'forms.plone.less'",
                      "barceloneta-formtabbing": "'formtabbing.plone.less'",
                      "barceloneta-grid": "'grid.plone.less'",
                      "barceloneta-header": "'header.plone.less'",
                      "barceloneta-image": "'image.plone.less'",
                      "barceloneta-loginform": "'loginform.plone.less'",
                      "barceloneta-main": "'main.plone.less'",
                      "barceloneta-mixin-borderradius": "'mixin.borderradius.plone.less'",
                      "barceloneta-mixin-buttons": "'mixin.buttons.plone.less'",
                      "barceloneta-mixin-clearfix": "'mixin.clearfix.plone.less'",
                      "barceloneta-mixin-font": "'mixin.font.plone.less'",
                      "barceloneta-mixin-forms": "'mixin.forms.plone.less'",
                      "barceloneta-mixin-grid": "'mixin.grid.plone.less'",
                      "barceloneta-mixin-gridframework": "'mixin.gridframework.plone.less'",
                      "barceloneta-mixin-images": "'mixin.images.plone.less'",
                      "barceloneta-mixin-prefixes": "'mixin.prefixes.plone.less'",
                      "barceloneta-mixin-tabfocus": "'mixin.tabfocus.plone.less'",
                      "barceloneta-modal": "'modal.plone.less'",
                      "barceloneta-normalize": "'normalize.plone.less'",
                      "barceloneta-pagination": "'pagination.plone.less'",
                      "barceloneta-pickadate": "'pickadate.plone.less'",
                      "barceloneta-portlets": "'portlets.plone.less'",
                      "barceloneta-print": "'print.plone.less'",
                      "barceloneta-scaffolding": "'scaffolding.plone.less'",
                      "barceloneta-search": "'search.plone.less'",
                      "barceloneta-sitemap": "'sitemap.plone.less'",
                      "barceloneta-sitenav": "'sitenav.plone.less'",
                      "barceloneta-sortable": "'sortable.plone.less'",
                      "barceloneta-states": "'states.plone.less'",
                      "barceloneta-tables": "'tables.plone.less'",
                      "barceloneta-tablesorter": "'tablesorter.plone.less'",
                      "barceloneta-tags": "'tags.plone.less'",
                      "barceloneta-thumbs": "'thumbs.plone.less'",
                      "barceloneta-toc": "'toc.plone.less'",
                      "barceloneta-tooltip": "'tooltip.plone.less'",
                      "barceloneta-tree": "'tree.plone.less'",
                      "barceloneta-type": "'type.plone.less'",
                      "barceloneta-variables": "'variables.plone.less'",
                      "barceloneta-views": "'views.plone.less'",
                      "bebest-main": "'bebest-theme.less'",
                      "bebest-toolbar-bg": "rgba(0,0,0,.9)",
                      "bebest-toolbar-font-primary": "sans-serif",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-plone-app-event-event-css": "'ee450a33312f44f2956f423c05ae73a5.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier_dropdownmenu": "'dropdown.less'",

                    }
                }
            }
,
            "thememapper": {
                files: [
                    {"/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css": ["/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "thememapper-compiled.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/plonetheme.bebest",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "barceloneta-accessibility": "'accessibility.plone.less'",
                      "barceloneta-alerts": "'alerts.plone.less'",
                      "barceloneta-all": "'barceloneta.plone.export.less'",
                      "barceloneta-behaviors": "'behaviors.plone.less'",
                      "barceloneta-breadcrumbs": "'breadcrumbs.plone.less'",
                      "barceloneta-buttons": "'buttons.plone.less'",
                      "barceloneta-code": "'code.plone.less'",
                      "barceloneta-contents": "'contents.plone.less'",
                      "barceloneta-controlpanels": "'controlpanels.plone.less'",
                      "barceloneta-deco": "'deco.plone.less'",
                      "barceloneta-discussion": "'discussion.plone.less'",
                      "barceloneta-dropzone": "'dropzone.plone.less'",
                      "barceloneta-event": "'event.plone.less'",
                      "barceloneta-fonts": "'fonts.plone.less'",
                      "barceloneta-footer": "'footer.plone.less'",
                      "barceloneta-forms": "'forms.plone.less'",
                      "barceloneta-formtabbing": "'formtabbing.plone.less'",
                      "barceloneta-grid": "'grid.plone.less'",
                      "barceloneta-header": "'header.plone.less'",
                      "barceloneta-image": "'image.plone.less'",
                      "barceloneta-loginform": "'loginform.plone.less'",
                      "barceloneta-main": "'main.plone.less'",
                      "barceloneta-mixin-borderradius": "'mixin.borderradius.plone.less'",
                      "barceloneta-mixin-buttons": "'mixin.buttons.plone.less'",
                      "barceloneta-mixin-clearfix": "'mixin.clearfix.plone.less'",
                      "barceloneta-mixin-font": "'mixin.font.plone.less'",
                      "barceloneta-mixin-forms": "'mixin.forms.plone.less'",
                      "barceloneta-mixin-grid": "'mixin.grid.plone.less'",
                      "barceloneta-mixin-gridframework": "'mixin.gridframework.plone.less'",
                      "barceloneta-mixin-images": "'mixin.images.plone.less'",
                      "barceloneta-mixin-prefixes": "'mixin.prefixes.plone.less'",
                      "barceloneta-mixin-tabfocus": "'mixin.tabfocus.plone.less'",
                      "barceloneta-modal": "'modal.plone.less'",
                      "barceloneta-normalize": "'normalize.plone.less'",
                      "barceloneta-pagination": "'pagination.plone.less'",
                      "barceloneta-pickadate": "'pickadate.plone.less'",
                      "barceloneta-portlets": "'portlets.plone.less'",
                      "barceloneta-print": "'print.plone.less'",
                      "barceloneta-scaffolding": "'scaffolding.plone.less'",
                      "barceloneta-search": "'search.plone.less'",
                      "barceloneta-sitemap": "'sitemap.plone.less'",
                      "barceloneta-sitenav": "'sitenav.plone.less'",
                      "barceloneta-sortable": "'sortable.plone.less'",
                      "barceloneta-states": "'states.plone.less'",
                      "barceloneta-tables": "'tables.plone.less'",
                      "barceloneta-tablesorter": "'tablesorter.plone.less'",
                      "barceloneta-tags": "'tags.plone.less'",
                      "barceloneta-thumbs": "'thumbs.plone.less'",
                      "barceloneta-toc": "'toc.plone.less'",
                      "barceloneta-tooltip": "'tooltip.plone.less'",
                      "barceloneta-tree": "'tree.plone.less'",
                      "barceloneta-type": "'type.plone.less'",
                      "barceloneta-variables": "'variables.plone.less'",
                      "barceloneta-views": "'views.plone.less'",
                      "bebest-main": "'bebest-theme.less'",
                      "bebest-toolbar-bg": "rgba(0,0,0,.9)",
                      "bebest-toolbar-font-primary": "sans-serif",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-plone-app-event-event-css": "'ee450a33312f44f2956f423c05ae73a5.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier_dropdownmenu": "'dropdown.less'",

                    }
                }
            }
,
            "webcouturier.dropdownmenu": {
                files: [
                    {"/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css": ["/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/dropdown.less"]}
                ],
                options: {
                    compress: true,
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictImports: false,
                    sourceMapURL: "webcouturier.dropdownmenu-compiled.css.map",
                    sourceMapBasepath: "/Volumes/SSD/Dev/plonetheme.bebest",
                    relativeUrls: true,
                    plugins: [
                        new require('less-plugin-inline-urls'),
                    ],
                    paths: [
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray", 
                      "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree", 
                      "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less", 
                      "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css", 
                      "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources", 
                      "/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css", 
                      "/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static", 
                      "temp_resources"
],
                    modifyVars: {
                      "barceloneta-accessibility": "'accessibility.plone.less'",
                      "barceloneta-alerts": "'alerts.plone.less'",
                      "barceloneta-all": "'barceloneta.plone.export.less'",
                      "barceloneta-behaviors": "'behaviors.plone.less'",
                      "barceloneta-breadcrumbs": "'breadcrumbs.plone.less'",
                      "barceloneta-buttons": "'buttons.plone.less'",
                      "barceloneta-code": "'code.plone.less'",
                      "barceloneta-contents": "'contents.plone.less'",
                      "barceloneta-controlpanels": "'controlpanels.plone.less'",
                      "barceloneta-deco": "'deco.plone.less'",
                      "barceloneta-discussion": "'discussion.plone.less'",
                      "barceloneta-dropzone": "'dropzone.plone.less'",
                      "barceloneta-event": "'event.plone.less'",
                      "barceloneta-fonts": "'fonts.plone.less'",
                      "barceloneta-footer": "'footer.plone.less'",
                      "barceloneta-forms": "'forms.plone.less'",
                      "barceloneta-formtabbing": "'formtabbing.plone.less'",
                      "barceloneta-grid": "'grid.plone.less'",
                      "barceloneta-header": "'header.plone.less'",
                      "barceloneta-image": "'image.plone.less'",
                      "barceloneta-loginform": "'loginform.plone.less'",
                      "barceloneta-main": "'main.plone.less'",
                      "barceloneta-mixin-borderradius": "'mixin.borderradius.plone.less'",
                      "barceloneta-mixin-buttons": "'mixin.buttons.plone.less'",
                      "barceloneta-mixin-clearfix": "'mixin.clearfix.plone.less'",
                      "barceloneta-mixin-font": "'mixin.font.plone.less'",
                      "barceloneta-mixin-forms": "'mixin.forms.plone.less'",
                      "barceloneta-mixin-grid": "'mixin.grid.plone.less'",
                      "barceloneta-mixin-gridframework": "'mixin.gridframework.plone.less'",
                      "barceloneta-mixin-images": "'mixin.images.plone.less'",
                      "barceloneta-mixin-prefixes": "'mixin.prefixes.plone.less'",
                      "barceloneta-mixin-tabfocus": "'mixin.tabfocus.plone.less'",
                      "barceloneta-modal": "'modal.plone.less'",
                      "barceloneta-normalize": "'normalize.plone.less'",
                      "barceloneta-pagination": "'pagination.plone.less'",
                      "barceloneta-pickadate": "'pickadate.plone.less'",
                      "barceloneta-portlets": "'portlets.plone.less'",
                      "barceloneta-print": "'print.plone.less'",
                      "barceloneta-scaffolding": "'scaffolding.plone.less'",
                      "barceloneta-search": "'search.plone.less'",
                      "barceloneta-sitemap": "'sitemap.plone.less'",
                      "barceloneta-sitenav": "'sitenav.plone.less'",
                      "barceloneta-sortable": "'sortable.plone.less'",
                      "barceloneta-states": "'states.plone.less'",
                      "barceloneta-tables": "'tables.plone.less'",
                      "barceloneta-tablesorter": "'tablesorter.plone.less'",
                      "barceloneta-tags": "'tags.plone.less'",
                      "barceloneta-thumbs": "'thumbs.plone.less'",
                      "barceloneta-toc": "'toc.plone.less'",
                      "barceloneta-tooltip": "'tooltip.plone.less'",
                      "barceloneta-tree": "'tree.plone.less'",
                      "barceloneta-type": "'type.plone.less'",
                      "barceloneta-variables": "'variables.plone.less'",
                      "barceloneta-views": "'views.plone.less'",
                      "bebest-main": "'bebest-theme.less'",
                      "bebest-toolbar-bg": "rgba(0,0,0,.9)",
                      "bebest-toolbar-font-primary": "sans-serif",
                      "bootstrap-badges": "'badges.less'",
                      "bootstrap-basic": "'navbar.less'",
                      "bootstrap-button-groups": "'button-groups.less'",
                      "bootstrap-buttons": "'close.less'",
                      "bootstrap-dropdown": "'dropdowns.less'",
                      "bootstrap-glyphicons": "'glyphicons.less'",
                      "bootstrap-mixins": "'mixins.less'",
                      "bootstrap-modal": "'modals.less'",
                      "bootstrap-progress-bars": "'progress-bars.less'",
                      "bootstrap-variables": "'variables.less'",
                      "bowerPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/'",
                      "dropzone": "'dropzone.css'",
                      "icon-font-path": "\"../fonts/\"",
                      "isMockup": "false",
                      "isPlone": "false",
                      "jqtree": "'jqtree.css'",
                      "jquery_recurrenceinput": "'jquery.recurrenceinput.css'",
                      "layouts-editor": "'layouts-editor.less'",
                      "mockup-patterns-autotoc": "'pattern.autotoc.less'",
                      "mockup-patterns-filemanager": "'pattern.filemanager.less'",
                      "mockup-patterns-livesearch": "'pattern.livesearch.less'",
                      "mockup-patterns-markspeciallinks": "'pattern.markspeciallinks.less'",
                      "mockup-patterns-modal": "'pattern.modal.less'",
                      "mockup-patterns-pickadate": "'pattern.pickadate.less'",
                      "mockup-patterns-querystring": "'pattern.querystring.less'",
                      "mockup-patterns-recurrence": "'pattern.recurrence.less'",
                      "mockup-patterns-relateditems": "'pattern.relateditems.less'",
                      "mockup-patterns-resourceregistry": "'pattern.resourceregistry.less'",
                      "mockup-patterns-select2": "'pattern.select2.less'",
                      "mockup-patterns-structure": "'pattern.structure.less'",
                      "mockup-patterns-thememapper": "'pattern.thememapper.less'",
                      "mockup-patterns-tinymce": "'pattern.tinymce.less'",
                      "mockup-patterns-tooltip": "'pattern.tooltip.less'",
                      "mockup-patterns-tree": "'pattern.tree.less'",
                      "mockup-patterns-upload": "'pattern.upload.less'",
                      "mockup-popover": "'popover.less'",
                      "mockupPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/'",
                      "mockuplessPath": "'/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less/'",
                      "mosaic": "'mosaic.pattern.less'",
                      "picker": "'classic.css'",
                      "picker_date": "'classic.date.css'",
                      "picker_time": "'classic.time.css'",
                      "plone": "'plone.less'",
                      "plone-container-lg": "1170px",
                      "plone-container-md": "970px",
                      "plone-container-sm": "750px",
                      "plone-gray-light": "lighten(#000, 46.5%)",
                      "plone-gray-lighter": "lighten(#000, 80%)",
                      "plone-left-toolbar": "60px",
                      "plone-left-toolbar-expanded": "120px",
                      "plone-link-color": "rgba(0,123,179,1)",
                      "plone-logged-in": "'plone-logged-in.less'",
                      "plone-patterns-toolbar": "'toolbar.plone.less'",
                      "plone-screen-lg-min": "1200px",
                      "plone-screen-md-max": "(@plone-screen-lg-min + 1)",
                      "plone-screen-md-min": "992px",
                      "plone-screen-sm-max": "(@plone-screen-md-min + 1)",
                      "plone-screen-sm-min": "768px",
                      "plone-screen-xs-max": "(@plone-screen-sm-min + 1)",
                      "plone-screen-xs-min": "480px",
                      "plone-toolbar-bg": "rgba(0,0,0,.9)",
                      "plone-toolbar-draft-color": "rgb(250,184,42)",
                      "plone-toolbar-font-primary": "sans-serif",
                      "plone-toolbar-font-secundary": "sans-serif",
                      "plone-toolbar-internal-color": "rgb(250,184,42)",
                      "plone-toolbar-internally-published-color": "rgb(136,61,250)",
                      "plone-toolbar-link": "rgba(0,123,179,1)",
                      "plone-toolbar-pending-color": "rgb(226,231,33)",
                      "plone-toolbar-private-color": "rgb(196,24,60)",
                      "plone-toolbar-published-color": "rgba(0,123,179,1)",
                      "plone-toolbar-separator-color": "rgba(255,255,255,.17)",
                      "plone-toolbar-submenu-bg": "rgba(20,20,20,.9)",
                      "plone-toolbar-submenu-header-color": "lighten(#000, 80%)",
                      "plone-toolbar-submenu-text-color": "lighten(#000, 90%)",
                      "plone-toolbar-text-color": "rgba(255,255,255,1)",
                      "resource-plone-app-event-event-css": "'ee450a33312f44f2956f423c05ae73a5.js'",
                      "resource-plone-app-jquerytools-dateinput-js": "'jquery.tools.dateinput.css'",
                      "resource-plone-app-jquerytools-js": "'jquery.tools.overlay.css'",
                      "resourceregistry": "'resourceregistry.less'",
                      "select2": "'select2.css'",
                      "sitePath": "'/'",
                      "staticPath": "'/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static'",
                      "thememapper": "'thememapper.less'",
                      "tinymce": "'Content.less'",
                      "tinymce-default-styles": "'tinymce-styles.css'",
                      "tinymce-visualblocks": "'visualblocks.css'",
                      "webcouturier_dropdownmenu": "'dropdown.less'",

                    }
                }
            }

        },
        requirejs: {
            
            "bebest-main": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/base/pattern", "mockup-i18n": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/i18n", "underscore": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "pat-logger": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.3-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/f6b3327a2aba49a597b3f625df450161", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring/pattern", "bebest-main": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/bebest", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/bbeb7adaf385411ea5e2de2a6dec0c8f", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/a6fc3a810e5f4b259a7e3d9ac7be9279", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems/pattern", "leaflet": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/leaflet", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "bebest-main": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "leaflet": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/bebest.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/bebest-main-compiled.js',
                    optimize: "none"
                }
            },

            "leaflet": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/base/pattern", "mockup-i18n": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/i18n", "underscore": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "pat-logger": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.3-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/f6b3327a2aba49a597b3f625df450161", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring/pattern", "bebest-main": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/bebest", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/bbeb7adaf385411ea5e2de2a6dec0c8f", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/a6fc3a810e5f4b259a7e3d9ac7be9279", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems/pattern", "leaflet": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/leaflet", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "bebest-main": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "leaflet": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/leaflet.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/leaflet-compiled.js',
                    optimize: "none"
                }
            },

            "layouts-editor": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "empty:", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "empty:", "mockup-i18n": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/i18n", "underscore": "empty:", "pat-logger": "empty:", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "empty:", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.3-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/f6b3327a2aba49a597b3f625df450161", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring/pattern", "bebest-main": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/bebest", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "empty:", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/bbeb7adaf385411ea5e2de2a6dec0c8f", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/a6fc3a810e5f4b259a7e3d9ac7be9279", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "empty:", "leaflet": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/leaflet", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "bebest-main": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "leaflet": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor-compiled.js',
                    optimize: "none"
                }
            },

            "mosaic": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "empty:", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "empty:", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "empty:", "mockup-i18n": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/i18n", "underscore": "empty:", "pat-logger": "empty:", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "empty:", "jquery.cookie": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "empty:", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.3-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/f6b3327a2aba49a597b3f625df450161", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring/pattern", "bebest-main": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/bebest", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "empty:", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/bbeb7adaf385411ea5e2de2a6dec0c8f", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "empty:", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/a6fc3a810e5f4b259a7e3d9ac7be9279", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "empty:", "leaflet": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/leaflet", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "bebest-main": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "leaflet": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic-compiled.js',
                    optimize: "none"
                }
            },

            "plone-logged-in": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "empty:", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "empty:", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "empty:", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "empty:", "mockup-i18n": "empty:", "underscore": "empty:", "pat-logger": "empty:", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "empty:", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "empty:", "jquery.cookie": "empty:", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "empty:", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.3-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/f6b3327a2aba49a597b3f625df450161", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring/pattern", "bebest-main": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/bebest", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "empty:", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "empty:", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "empty:", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "empty:", "bootstrap-dropdown": "empty:", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "empty:", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/bbeb7adaf385411ea5e2de2a6dec0c8f", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "empty:", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "empty:", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "empty:", "mockup-patterns-moment": "empty:", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "empty:", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "empty:", "mockup-patterns-autotoc": "empty:", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "empty:", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "empty:", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "empty:", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/a6fc3a810e5f4b259a7e3d9ac7be9279", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems/pattern", "leaflet": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/leaflet", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "empty:", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "bebest-main": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "leaflet": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.js',
                    optimize: "none"
                }
            },

            "plone": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "empty:", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/base/pattern", "mockup-i18n": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/i18n", "underscore": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "pat-logger": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.3-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/f6b3327a2aba49a597b3f625df450161", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring/pattern", "bebest-main": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/bebest", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/bbeb7adaf385411ea5e2de2a6dec0c8f", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/a6fc3a810e5f4b259a7e3d9ac7be9279", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems/pattern", "leaflet": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/leaflet", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "bebest-main": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "leaflet": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.js',
                    optimize: "none"
                }
            },

            "resourceregistry": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "empty:", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/base/pattern", "mockup-i18n": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/i18n", "underscore": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "pat-logger": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.3-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/f6b3327a2aba49a597b3f625df450161", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring/pattern", "bebest-main": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/bebest", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/bbeb7adaf385411ea5e2de2a6dec0c8f", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/a6fc3a810e5f4b259a7e3d9ac7be9279", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems/pattern", "leaflet": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/leaflet", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "bebest-main": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "leaflet": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.js',
                    optimize: "none"
                }
            },

            "thememapper": {
                options: {
                    baseUrl: '/',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    paths: {"less": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/less/dist/less", "text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/requirejs-text/text", "mockup-patterns-recurrence": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence/pattern", "mockup-patterns-tinymce": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/pattern", "mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/parser", "mockup-router": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/router", "tinymce-spellchecker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", "jquery.event.drop": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/lib/jquery.event.drop", "tinymce-autosave": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", "tinymce-charmap": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", "tinymce-save": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/save/plugin", "tinymce-fullscreen": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", "tinymce-noneditable": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", "ace-mode-javascript": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-javascript", "mockup-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/mockup-core/js/registry", "tinymce-preview": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", "jquery": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery/dist/jquery.min", "tinymce-visualblocks": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", "mockup-ui-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/ui", "mockup-patterns-formautofocus": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formautofocus/pattern", "mockup-patterns-base": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/base/pattern", "mockup-i18n": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/i18n", "underscore": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/underscore/underscore", "pat-logger": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/logger", "ace-mode-text": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-text", "backbone.paginator": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/backbone.paginator/lib/backbone.paginator", "tinymce-tabfocus": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", "picker.time": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.time", "tinymce-fullpage": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", "tinymce-compat3x": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", "pat-jquery-ext": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/jquery-ext", "mockup-patterns-thememapper": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper/pattern", "mockup-patterns-filemanager-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager", "bootstrap-transition": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/transition", "mockup-patterns-tinymce-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce", "mosaic-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "tinymce-visualchars": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", "expect": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/expect/index", "tinymce-anchor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", "mockup-patterns-filemanager": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager/pattern", "mockup-patterns-backdrop": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/backdrop/pattern", "mockup-patterns-cookietrigger": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/cookietrigger/pattern", "tinymce-layer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/layer/plugin", "mockup-patterns-modal": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal/pattern", "jquery.cookie": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.cookie/jquery.cookie", "tinymce-wordcount": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", "mockup-utils": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/utils", "tinymce-advlist": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", "plone-patterns-portletmanager": "/Volumes/SSD/Dev/eggs/plone.app.portlets-3.1.3-py2.7.egg/plone/app/portlets/browser/manage-portlets", "tinymce-modern-theme": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/themes/modern/theme", "tinymce-paste": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", "resource-plone-app-discussion-javascripts-comments": "temp_resources/f6b3327a2aba49a597b3f625df450161", "mockup-patterns-resourceregistry": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry/pattern", "mockup-patterns-upload-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload", "tinymce-bbcode": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", "mockup-patterns-querystring": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring/pattern", "bebest-main": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/bebest", "logging": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/logging/src/logging", "ace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/ace", "mockup-patterns-thememapper-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper", "tinymce-autolink": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", "mockup-patterns-formunloadalert": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/formunloadalert/pattern", "picker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker", "mockup-patterns-structure-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure", "tinymce-image": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/image/plugin", "marked": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/marked/lib/marked", "ace-mode-css": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/mode-css", "pat-registry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/registry", "plone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone", "resource-plone-app-jquerytools-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", "mockup-patterns-select2": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2/pattern", "mockup-patterns-structure": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/pattern", "tinymce-autoresize": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", "jquery.recurrenceinput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", "jquery.form": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery-form/jquery.form", "mosaic": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern", "mockup-patterns-sortable": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/sortable/pattern", "tinymce-template": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/template/plugin", "translate": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/js/i18n-wrapper", "bootstrap-dropdown": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/dropdown", "mockup-patterns-contentloader": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/contentloader/pattern", "rjs": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/r.js/dist/r", "tinymce-pagebreak": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", "bootstrap-alert": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/alert", "tinymce-textpattern": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", "tinymce-emoticons": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", "resourceregistry": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry", "tinymce-table": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/table/plugin", "mockup-patterns-tree": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree/pattern", "jquery.event.drag": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/lib/jquery.event.drag", "tinymce-textcolor": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", "resource-plone-app-event-event-js": "temp_resources/bbeb7adaf385411ea5e2de2a6dec0c8f", "tinymce-print": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/print/plugin", "mockup-patterns-preventdoublesubmit": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/preventdoublesubmit/pattern", "tinymce-link": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/link/plugin", "pat-compat": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/compat", "tinymce-hr": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", "select2": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2/select2", "tinymce-media": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/media/plugin", "mockup-patterns-texteditor": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/texteditor/pattern", "mockup-patterns-tooltip": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip/pattern", "resource-plone-app-jquerytools-dateinput-js": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", "plone-logged-in": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in", "mockup-patterns-pickadate": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate/pattern", "mockup-patterns-moment": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/moment/pattern", "tinymce-contextmenu": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", "ace-theme-monokai": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/ace-builds/src/theme-monokai", "mockup-patterns-toggle": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/toggle/pattern", "tinymce-directionality": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", "mockup-patterns-markspeciallinks": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks/pattern", "tinymce-legacyoutput": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", "pat-base": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/base", "plone-patterns-toolbar": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/toolbar", "mockup-patterns-inlinevalidation": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/inlinevalidation/pattern", "thememapper": "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper", "tinymce": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/tinymce", "mosaic-base-url": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js", "mockup-patterns-resourceregistry-url": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry", "tinymce-insertdatetime": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", "jqtree": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree/tree.jquery", "mockup-patterns-livesearch": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch/pattern", "mockup-patterns-upload": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/pattern", "picker.date": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/picker.date", "bootstrap-tooltip": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/tooltip", "mockup-patterns-autotoc": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc/pattern", "tinymce-importcss": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", "backbone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/backbone/backbone", "tinymce-lists": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", "react": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/react", "mockup-patterns-textareamimetypeselector": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/textareamimetypeselector/pattern", "moment": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/moment/min/moment-with-locales.min", "sinon": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/sinonjs/sinon", "tinymce-code": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/code/plugin", "pat-utils": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/utils", "tinymce-colorpicker": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", "jquery.tmpl": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", "bootstrap-collapse": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/js/collapse", "jquery-highlightsearchterms": "temp_resources/a6fc3a810e5f4b259a7e3d9ac7be9279", "JSXTransformer": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/react/JSXTransformer", "mockup-patterns-relateditems": "/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems/pattern", "leaflet": "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/leaflet", "tinymce-nonbreaking": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", "layouts-editor": "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor", "tinymce-searchreplace": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", "pat-mockup-parser": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/patternslib/src/core/mockup-parser", "dropzone": "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist/dropzone-amd-module"},
                    shim: {"less": {}, "text": {}, "mockup-patterns-recurrence": {}, "mockup-patterns-tinymce": {}, "mockup-parser": {}, "mockup-router": {}, "tinymce-spellchecker": {"deps": ["tinymce"]}, "jquery.event.drop": {"exports": "$.drop", "deps": ["jquery"]}, "tinymce-autosave": {"deps": ["tinymce"]}, "tinymce-charmap": {"deps": ["tinymce"]}, "tinymce-save": {"deps": ["tinymce"]}, "tinymce-fullscreen": {"deps": ["tinymce"]}, "tinymce-noneditable": {"deps": ["tinymce"]}, "ace-mode-javascript": {}, "tinymce-advlist": {"deps": ["tinymce"]}, "tinymce-preview": {"deps": ["tinymce"]}, "mockup-patterns-tree": {}, "tinymce-pagebreak": {"deps": ["tinymce"]}, "mockup-patterns-formautofocus": {}, "mockup-i18n": {}, "underscore": {"exports": "window._"}, "pat-logger": {}, "ace-mode-text": {}, "backbone.paginator": {"exports": "window.Backbone.Paginator", "deps": ["backbone"]}, "jqtree": {"deps": ["jquery"]}, "tinymce-textcolor": {"deps": ["tinymce"]}, "picker.time": {"deps": ["picker"]}, "tinymce-fullpage": {"deps": ["tinymce"]}, "tinymce-compat3x": {"deps": ["tinymce"]}, "pat-jquery-ext": {}, "mockup-patterns-thememapper": {}, "picker": {}, "bootstrap-transition": {"exports": "window.jQuery.support.transition", "deps": ["jquery"]}, "mockup-patterns-preventdoublesubmit": {}, "tinymce-visualchars": {"deps": ["tinymce"]}, "expect": {"exports": "window.expect"}, "tinymce-anchor": {"deps": ["tinymce"]}, "mockup-patterns-filemanager": {}, "mockup-patterns-backdrop": {}, "mockup-patterns-cookietrigger": {}, "tinymce-layer": {"deps": ["tinymce"]}, "mockup-patterns-modal": {}, "jquery.cookie": {"deps": ["jquery"]}, "tinymce-wordcount": {"deps": ["tinymce"]}, "mockup-utils": {}, "mockup-registry": {}, "plone-patterns-portletmanager": {}, "tinymce-modern-theme": {"deps": ["tinymce"]}, "tinymce-paste": {"deps": ["tinymce"]}, "resource-plone-app-discussion-javascripts-comments": {}, "tinymce-bbcode": {"deps": ["tinymce"]}, "mockup-patterns-querystring": {}, "bebest-main": {}, "logging": {}, "ace": {}, "tinymce-autolink": {"deps": ["tinymce"]}, "mockup-patterns-formunloadalert": {}, "resource-plone-app-jquerytools-dateinput-js": {"deps": ["jquery"]}, "tinymce-image": {"deps": ["tinymce"]}, "marked": {}, "ace-mode-css": {}, "pat-registry": {}, "plone": {}, "resource-plone-app-jquerytools-js": {"deps": ["jquery"]}, "mockup-patterns-select2": {}, "mockup-patterns-structure": {}, "tinymce-autoresize": {"deps": ["tinymce"]}, "jquery.recurrenceinput": {"deps": ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]}, "jquery.form": {}, "pat-utils": {}, "mockup-patterns-sortable": {}, "tinymce-template": {"deps": ["tinymce"]}, "translate": {}, "bootstrap-dropdown": {"deps": ["jquery"]}, "mockup-patterns-contentloader": {}, "rjs": {}, "tinymce-lists": {"deps": ["tinymce"]}, "bootstrap-alert": {"deps": ["jquery"]}, "tinymce-textpattern": {"deps": ["tinymce"]}, "tinymce-emoticons": {"deps": ["tinymce"]}, "resourceregistry": {}, "tinymce-table": {"deps": ["tinymce"]}, "jquery": {}, "jquery.event.drag": {"deps": ["jquery"]}, "tinymce-tabfocus": {"deps": ["tinymce"]}, "resource-plone-app-event-event-js": {}, "tinymce-print": {"deps": ["tinymce"]}, "tinymce-link": {"deps": ["tinymce"]}, "pat-compat": {}, "tinymce-hr": {"deps": ["tinymce"]}, "select2": {}, "tinymce-media": {"deps": ["tinymce"]}, "mockup-patterns-texteditor": {}, "mockup-patterns-tooltip": {}, "plone-logged-in": {}, "mockup-patterns-pickadate": {}, "JSXTransformer": {"exports": "window.JSXTransformer"}, "tinymce-contextmenu": {"deps": ["tinymce"]}, "ace-theme-monokai": {}, "mockup-patterns-toggle": {}, "tinymce-directionality": {"deps": ["tinymce"]}, "mockup-patterns-markspeciallinks": {}, "tinymce-legacyoutput": {"deps": ["tinymce"]}, "pat-base": {}, "plone-patterns-toolbar": {}, "mockup-patterns-inlinevalidation": {}, "thememapper": {}, "tinymce": {"exports": "window.tinyMCE", "init": "function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }"}, "tinymce-visualblocks": {"deps": ["tinymce"]}, "tinymce-insertdatetime": {"deps": ["tinymce"]}, "mockup-patterns-base": {}, "mockup-patterns-livesearch": {}, "mockup-patterns-upload": {}, "picker.date": {"deps": ["picker"]}, "tinymce-searchreplace": {"deps": ["tinymce"]}, "mockup-patterns-autotoc": {}, "tinymce-importcss": {"deps": ["tinymce"]}, "backbone": {"exports": "window.Backbone", "deps": ["underscore", "jquery"]}, "mockup-patterns-resourceregistry": {}, "react": {}, "mockup-patterns-textareamimetypeselector": {}, "moment": {}, "sinon": {"exports": "window.sinon"}, "tinymce-code": {"deps": ["tinymce"]}, "mosaic": {}, "tinymce-colorpicker": {"deps": ["tinymce"]}, "jquery.tmpl": {"deps": ["jquery"]}, "bootstrap-collapse": {"exports": "window.jQuery.fn.collapse.Constructor", "deps": ["jquery"]}, "jquery-highlightsearchterms": {}, "mockup-patterns-moment": {}, "mockup-patterns-relateditems": {}, "leaflet": {}, "tinymce-nonbreaking": {"deps": ["tinymce"]}, "layouts-editor": {}, "bootstrap-tooltip": {"deps": ["jquery"]}, "pat-mockup-parser": {}, "dropzone": {}},
                    wrapShim: true,
                    name: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper.js',
                    exclude: ['jquery'],
                    out: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.js',
                    optimize: "none"
                }
            },

        },
        sed: {
            
    sed0: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less',
      replacement: '../../++theme++barceloneta/less',
    },

    sed1: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../../++resource++mockup/relateditems',
    },

    sed2: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../../++plone++static/components/jqtree',
    },

    sed3: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../../++resource++mockup/pickadate',
    },

    sed4: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../../++resource++mockup/structure/less',
    },

    sed5: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../../++resource++mockup/upload/less',
    },

    sed6: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../../++plone++static/components/select2',
    },

    sed7: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed8: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed9: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../../++plone++static/components/dropzone/dist',
    },

    sed10: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../../++resource++mockup/resourceregistry',
    },

    sed11: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal',
      replacement: '../../++resource++mockup/modal',
    },

    sed12: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../../++resource++mockup/markspeciallinks',
    },

    sed13: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: 'src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static',
      replacement: '../../++plone++dropdown',
    },

    sed14: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring',
      replacement: '../../++resource++mockup/querystring',
    },

    sed15: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../../++resource++mockup/autotoc',
    },

    sed16: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../../++plone++static/components/pickadate/lib/themes',
    },

    sed17: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree',
      replacement: '../../++resource++mockup/tree',
    },

    sed18: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less',
      replacement: '../../++resource++mockupless',
    },

    sed19: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2',
      replacement: '../../++resource++mockup/select2',
    },

    sed20: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../../++resource++mockup/tinymce/less',
    },

    sed21: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: 'src/plonetheme/bebest/theme/css',
      replacement: '../../++theme++plonetheme.bebest/css',
    },

    sed22: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../../++resource++plone.app.theming',
    },

    sed23: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../../++plone++mosaic/css',
    },

    sed24: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed25: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../../++plone++static/components/bootstrap/less',
    },

    sed26: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: 'temp_resources',
      replacement: '../../++resource++plone.app.event',
    },

    sed27: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../../++resource++mockup/livesearch',
    },

    sed28: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static',
      replacement: '../../++plone++static',
    },

    sed29: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../../++resource++mockup/recurrence',
    },

    sed30: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../../++plone++static/patterns/toolbar/src/css',
    },

    sed31: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed32: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../../++resource++mockup/tooltip',
    },

    sed33: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../../++resource++mockup/filemanager',
    },

    sed34: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../../++resource++mockup/thememapper',
    },

    sed35: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-compiled.min.css',
      pattern: '/Volumes/SSD/Dev/plonetheme.bebest',
      replacement: '',
    },

    sed36: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less',
      replacement: '../../++theme++barceloneta/less',
    },

    sed37: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../../++resource++mockup/relateditems',
    },

    sed38: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../../++plone++static/components/jqtree',
    },

    sed39: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../../++resource++mockup/pickadate',
    },

    sed40: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../../++resource++mockup/structure/less',
    },

    sed41: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../../++resource++mockup/upload/less',
    },

    sed42: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../../++plone++static/components/select2',
    },

    sed43: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed44: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed45: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../../++plone++static/components/dropzone/dist',
    },

    sed46: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../../++resource++mockup/resourceregistry',
    },

    sed47: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal',
      replacement: '../../++resource++mockup/modal',
    },

    sed48: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../../++resource++mockup/markspeciallinks',
    },

    sed49: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: 'src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static',
      replacement: '../../++plone++dropdown',
    },

    sed50: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring',
      replacement: '../../++resource++mockup/querystring',
    },

    sed51: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../../++resource++mockup/autotoc',
    },

    sed52: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../../++plone++static/components/pickadate/lib/themes',
    },

    sed53: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree',
      replacement: '../../++resource++mockup/tree',
    },

    sed54: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less',
      replacement: '../../++resource++mockupless',
    },

    sed55: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2',
      replacement: '../../++resource++mockup/select2',
    },

    sed56: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../../++resource++mockup/tinymce/less',
    },

    sed57: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: 'src/plonetheme/bebest/theme/css',
      replacement: '../../++theme++plonetheme.bebest/css',
    },

    sed58: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../../++resource++plone.app.theming',
    },

    sed59: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../../++plone++mosaic/css',
    },

    sed60: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed61: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../../++plone++static/components/bootstrap/less',
    },

    sed62: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: 'temp_resources',
      replacement: '../../++resource++plone.app.event',
    },

    sed63: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../../++resource++mockup/livesearch',
    },

    sed64: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static',
      replacement: '../../++plone++static',
    },

    sed65: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../../++resource++mockup/recurrence',
    },

    sed66: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../../++plone++static/patterns/toolbar/src/css',
    },

    sed67: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed68: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../../++resource++mockup/tooltip',
    },

    sed69: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../../++resource++mockup/filemanager',
    },

    sed70: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../../++resource++mockup/thememapper',
    },

    sed71: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.css',
      pattern: '/Volumes/SSD/Dev/plonetheme.bebest',
      replacement: '',
    },

    sed72: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less',
      replacement: '../../++theme++barceloneta/less',
    },

    sed73: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../../++resource++mockup/relateditems',
    },

    sed74: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../../++plone++static/components/jqtree',
    },

    sed75: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../../++resource++mockup/pickadate',
    },

    sed76: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../../++resource++mockup/structure/less',
    },

    sed77: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../../++resource++mockup/upload/less',
    },

    sed78: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../../++plone++static/components/select2',
    },

    sed79: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed80: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed81: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../../++plone++static/components/dropzone/dist',
    },

    sed82: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../../++resource++mockup/resourceregistry',
    },

    sed83: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal',
      replacement: '../../++resource++mockup/modal',
    },

    sed84: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../../++resource++mockup/markspeciallinks',
    },

    sed85: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: 'src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static',
      replacement: '../../++plone++dropdown',
    },

    sed86: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring',
      replacement: '../../++resource++mockup/querystring',
    },

    sed87: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../../++resource++mockup/autotoc',
    },

    sed88: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../../++plone++static/components/pickadate/lib/themes',
    },

    sed89: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree',
      replacement: '../../++resource++mockup/tree',
    },

    sed90: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less',
      replacement: '../../++resource++mockupless',
    },

    sed91: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2',
      replacement: '../../++resource++mockup/select2',
    },

    sed92: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../../++resource++mockup/tinymce/less',
    },

    sed93: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: 'src/plonetheme/bebest/theme/css',
      replacement: '../../++theme++plonetheme.bebest/css',
    },

    sed94: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../../++resource++plone.app.theming',
    },

    sed95: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../../++plone++mosaic/css',
    },

    sed96: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed97: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../../++plone++static/components/bootstrap/less',
    },

    sed98: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: 'temp_resources',
      replacement: '../../++resource++plone.app.event',
    },

    sed99: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../../++resource++mockup/livesearch',
    },

    sed100: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static',
      replacement: '../../++plone++static',
    },

    sed101: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../../++resource++mockup/recurrence',
    },

    sed102: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../../++plone++static/patterns/toolbar/src/css',
    },

    sed103: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed104: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../../++resource++mockup/tooltip',
    },

    sed105: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../../++resource++mockup/filemanager',
    },

    sed106: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../../++resource++mockup/thememapper',
    },

    sed107: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.css',
      pattern: '/Volumes/SSD/Dev/plonetheme.bebest',
      replacement: '',
    },

    sed108: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less',
      replacement: '../++theme++barceloneta/less',
    },

    sed109: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed110: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed111: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed112: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed113: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed114: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed115: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed116: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed117: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed118: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed119: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed120: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed121: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static',
      replacement: '../++plone++dropdown',
    },

    sed122: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed123: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed124: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed125: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed126: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed127: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed128: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed129: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'src/plonetheme/bebest/theme/css',
      replacement: '../++theme++plonetheme.bebest/css',
    },

    sed130: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed131: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../++plone++mosaic/css',
    },

    sed132: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed133: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed134: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed135: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed136: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed137: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed138: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed139: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed140: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed141: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed142: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed143: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.css',
      pattern: '/Volumes/SSD/Dev/plonetheme.bebest',
      replacement: '',
    },

    sed144: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less',
      replacement: '../++theme++barceloneta/less',
    },

    sed145: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed146: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed147: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed148: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed149: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed150: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed151: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed152: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed153: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed154: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed155: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed156: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed157: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static',
      replacement: '../++plone++dropdown',
    },

    sed158: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed159: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed160: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed161: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed162: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed163: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed164: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed165: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'src/plonetheme/bebest/theme/css',
      replacement: '../++theme++plonetheme.bebest/css',
    },

    sed166: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed167: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../++plone++mosaic/css',
    },

    sed168: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed169: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed170: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed171: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed172: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed173: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed174: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed175: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed176: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed177: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed178: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed179: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.css',
      pattern: '/Volumes/SSD/Dev/plonetheme.bebest',
      replacement: '',
    },

    sed180: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less',
      replacement: '../++theme++barceloneta/less',
    },

    sed181: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed182: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed183: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed184: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed185: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed186: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed187: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed188: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed189: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed190: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed191: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed192: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed193: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static',
      replacement: '../++plone++dropdown',
    },

    sed194: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed195: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed196: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed197: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed198: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed199: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed200: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed201: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'src/plonetheme/bebest/theme/css',
      replacement: '../++theme++plonetheme.bebest/css',
    },

    sed202: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed203: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../++plone++mosaic/css',
    },

    sed204: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed205: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed206: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed207: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed208: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed209: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed210: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed211: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed212: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed213: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed214: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed215: {
      path: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.css',
      pattern: '/Volumes/SSD/Dev/plonetheme.bebest',
      replacement: '',
    },

    sed216: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less',
      replacement: '../++theme++barceloneta/less',
    },

    sed217: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed218: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed219: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed220: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed221: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed222: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed223: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed224: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed225: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed226: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed227: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed228: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed229: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static',
      replacement: '../++plone++dropdown',
    },

    sed230: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed231: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed232: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed233: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed234: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed235: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed236: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed237: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'src/plonetheme/bebest/theme/css',
      replacement: '../++theme++plonetheme.bebest/css',
    },

    sed238: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed239: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../++plone++mosaic/css',
    },

    sed240: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed241: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed242: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed243: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed244: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed245: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed246: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed247: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed248: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed249: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed250: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed251: {
      path: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.css',
      pattern: '/Volumes/SSD/Dev/plonetheme.bebest',
      replacement: '',
    },

    sed252: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plonetheme.barceloneta-1.6.18-py2.7.egg/plonetheme/barceloneta/theme/less',
      replacement: '../++theme++barceloneta/less',
    },

    sed253: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/relateditems',
      replacement: '../++resource++mockup/relateditems',
    },

    sed254: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jqtree',
      replacement: '../++plone++static/components/jqtree',
    },

    sed255: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/pickadate',
      replacement: '../++resource++mockup/pickadate',
    },

    sed256: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/structure/less',
      replacement: '../++resource++mockup/structure/less',
    },

    sed257: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/upload/less',
      replacement: '../++resource++mockup/upload/less',
    },

    sed258: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/select2',
      replacement: '../++plone++static/components/select2',
    },

    sed259: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/src',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/src',
    },

    sed260: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/skins/lightgray',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/skins/lightgray',
    },

    sed261: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/dropzone/dist',
      replacement: '../++plone++static/components/dropzone/dist',
    },

    sed262: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/resourceregistry',
      replacement: '../++resource++mockup/resourceregistry',
    },

    sed263: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/modal',
      replacement: '../++resource++mockup/modal',
    },

    sed264: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/markspeciallinks',
      replacement: '../++resource++mockup/markspeciallinks',
    },

    sed265: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: 'src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static',
      replacement: '../++plone++dropdown',
    },

    sed266: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/querystring',
      replacement: '../++resource++mockup/querystring',
    },

    sed267: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/autotoc',
      replacement: '../++resource++mockup/autotoc',
    },

    sed268: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/pickadate/lib/themes',
      replacement: '../++plone++static/components/pickadate/lib/themes',
    },

    sed269: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tree',
      replacement: '../++resource++mockup/tree',
    },

    sed270: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/less',
      replacement: '../++resource++mockupless',
    },

    sed271: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/select2',
      replacement: '../++resource++mockup/select2',
    },

    sed272: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tinymce/less',
      replacement: '../++resource++mockup/tinymce/less',
    },

    sed273: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: 'src/plonetheme/bebest/theme/css',
      replacement: '../++theme++plonetheme.bebest/css',
    },

    sed274: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources',
      replacement: '../++resource++plone.app.theming',
    },

    sed275: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css',
      replacement: '../++plone++mosaic/css',
    },

    sed276: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/jquery.recurrenceinput.js/lib',
      replacement: '../++plone++static/components/jquery.recurrenceinput.js/lib',
    },

    sed277: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/bootstrap/less',
      replacement: '../++plone++static/components/bootstrap/less',
    },

    sed278: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: 'temp_resources',
      replacement: '../++resource++plone.app.event',
    },

    sed279: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/livesearch',
      replacement: '../++resource++mockup/livesearch',
    },

    sed280: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static',
      replacement: '../++plone++static',
    },

    sed281: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/recurrence',
      replacement: '../++resource++mockup/recurrence',
    },

    sed282: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/patterns/toolbar/src/css',
      replacement: '../++plone++static/patterns/toolbar/src/css',
    },

    sed283: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
      replacement: '../++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/css',
    },

    sed284: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/tooltip',
      replacement: '../++resource++mockup/tooltip',
    },

    sed285: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/filemanager',
      replacement: '../++resource++mockup/filemanager',
    },

    sed286: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/eggs/mockup-2.1.4-py2.7.egg/mockup/patterns/thememapper',
      replacement: '../++resource++mockup/thememapper',
    },

    sed287: {
      path: '/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/webcouturier.dropdownmenu-compiled.css',
      pattern: '/Volumes/SSD/Dev/plonetheme.bebest',
      replacement: '',
    },

        },
        uglify: {
            
        "bebest": {
          options: {
            sourceMap: true,
            sourceMapName: '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/bebest-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/bebest-compiled.min.js': ["/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/bebest-main-compiled.js", "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/leaflet-compiled.js"]
          }
        },

        "layouts-editor": {
          options: {
            sourceMap: true,
            sourceMapName: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/layouts-editor.js': ["/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor-compiled.js"]
          }
        },

        "mosaic": {
          options: {
            sourceMap: true,
            sourceMapName: '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/plone-mosaic.js': ["/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic-compiled.js"]
          }
        },

        "plone-logged-in": {
          options: {
            sourceMap: true,
            sourceMapName: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.min.js': ["/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in-compiled.js"]
          }
        },

        "plone": {
          options: {
            sourceMap: true,
            sourceMapName: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.js': ["/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-compiled.js"]
          }
        },

        "resourceregistry": {
          options: {
            sourceMap: true,
            sourceMapName: '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.js': ["/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry-compiled.js"]
          }
        },

        "thememapper": {
          options: {
            sourceMap: true,
            sourceMapName: '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.min.js.map',
            sourceMapIncludeSources: false
          },
          files: {
            '/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.min.js': ["/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper-compiled.js"]
          }
        },

        },
        watch: {
            scripts: {
                files: ["/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/bebest.js", "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/css/bebest-theme.less", "/Volumes/SSD/Dev/plonetheme.bebest/src/plonetheme/bebest/theme/js/leaflet.js", "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/layouts-editor.js", "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css/layouts-editor.less", "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/js/mosaic.pattern.js", "/Volumes/SSD/Dev/eggs/plone.app.mosaic-1.0-py2.7.egg/plone/app/mosaic/browser/static/css/mosaic.pattern.less", "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in.js", "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone-logged-in.less", "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone.js", "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/plone.less", "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry.js", "/Volumes/SSD/Dev/eggs/Products.CMFPlone-5.0.4-py2.7.egg/Products/CMFPlone/static/resourceregistry.less", "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper.js", "/Volumes/SSD/Dev/eggs/plone.app.theming-1.2.19-py2.7.egg/plone/app/theming/browser/resources/thememapper.less", "/Volumes/SSD/Dev/plonetheme.bebest/src/webcouturier.dropdownmenu/src/webcouturier/dropdownmenu/browser/static/dropdown.less"],
                tasks: ['requirejs', 'less', 'sed', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sed');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('compile-all', ['requirejs', 'less', 'sed', 'uglify']);
    
grunt.registerTask('compile-bebest',["requirejs:bebest-main","requirejs:leaflet", 'less:bebest', 'sed:sed0', 'sed:sed1', 'sed:sed2', 'sed:sed3', 'sed:sed4', 'sed:sed5', 'sed:sed6', 'sed:sed7', 'sed:sed8', 'sed:sed9', 'sed:sed10', 'sed:sed11', 'sed:sed12', 'sed:sed13', 'sed:sed14', 'sed:sed15', 'sed:sed16', 'sed:sed17', 'sed:sed18', 'sed:sed19', 'sed:sed20', 'sed:sed21', 'sed:sed22', 'sed:sed23', 'sed:sed24', 'sed:sed25', 'sed:sed26', 'sed:sed27', 'sed:sed28', 'sed:sed29', 'sed:sed30', 'sed:sed31', 'sed:sed32', 'sed:sed33', 'sed:sed34', 'sed:sed35', 'uglify:bebest']);
grunt.registerTask('compile-layouts-editor',["requirejs:layouts-editor", 'less:layouts-editor', 'sed:sed36', 'sed:sed37', 'sed:sed38', 'sed:sed39', 'sed:sed40', 'sed:sed41', 'sed:sed42', 'sed:sed43', 'sed:sed44', 'sed:sed45', 'sed:sed46', 'sed:sed47', 'sed:sed48', 'sed:sed49', 'sed:sed50', 'sed:sed51', 'sed:sed52', 'sed:sed53', 'sed:sed54', 'sed:sed55', 'sed:sed56', 'sed:sed57', 'sed:sed58', 'sed:sed59', 'sed:sed60', 'sed:sed61', 'sed:sed62', 'sed:sed63', 'sed:sed64', 'sed:sed65', 'sed:sed66', 'sed:sed67', 'sed:sed68', 'sed:sed69', 'sed:sed70', 'sed:sed71', 'uglify:layouts-editor']);
grunt.registerTask('compile-mosaic',["requirejs:mosaic", 'less:mosaic', 'sed:sed72', 'sed:sed73', 'sed:sed74', 'sed:sed75', 'sed:sed76', 'sed:sed77', 'sed:sed78', 'sed:sed79', 'sed:sed80', 'sed:sed81', 'sed:sed82', 'sed:sed83', 'sed:sed84', 'sed:sed85', 'sed:sed86', 'sed:sed87', 'sed:sed88', 'sed:sed89', 'sed:sed90', 'sed:sed91', 'sed:sed92', 'sed:sed93', 'sed:sed94', 'sed:sed95', 'sed:sed96', 'sed:sed97', 'sed:sed98', 'sed:sed99', 'sed:sed100', 'sed:sed101', 'sed:sed102', 'sed:sed103', 'sed:sed104', 'sed:sed105', 'sed:sed106', 'sed:sed107', 'uglify:mosaic']);
grunt.registerTask('compile-plone-logged-in',["requirejs:plone-logged-in", 'less:plone-logged-in', 'sed:sed108', 'sed:sed109', 'sed:sed110', 'sed:sed111', 'sed:sed112', 'sed:sed113', 'sed:sed114', 'sed:sed115', 'sed:sed116', 'sed:sed117', 'sed:sed118', 'sed:sed119', 'sed:sed120', 'sed:sed121', 'sed:sed122', 'sed:sed123', 'sed:sed124', 'sed:sed125', 'sed:sed126', 'sed:sed127', 'sed:sed128', 'sed:sed129', 'sed:sed130', 'sed:sed131', 'sed:sed132', 'sed:sed133', 'sed:sed134', 'sed:sed135', 'sed:sed136', 'sed:sed137', 'sed:sed138', 'sed:sed139', 'sed:sed140', 'sed:sed141', 'sed:sed142', 'sed:sed143', 'uglify:plone-logged-in']);
grunt.registerTask('compile-plone',["requirejs:plone", 'less:plone', 'sed:sed144', 'sed:sed145', 'sed:sed146', 'sed:sed147', 'sed:sed148', 'sed:sed149', 'sed:sed150', 'sed:sed151', 'sed:sed152', 'sed:sed153', 'sed:sed154', 'sed:sed155', 'sed:sed156', 'sed:sed157', 'sed:sed158', 'sed:sed159', 'sed:sed160', 'sed:sed161', 'sed:sed162', 'sed:sed163', 'sed:sed164', 'sed:sed165', 'sed:sed166', 'sed:sed167', 'sed:sed168', 'sed:sed169', 'sed:sed170', 'sed:sed171', 'sed:sed172', 'sed:sed173', 'sed:sed174', 'sed:sed175', 'sed:sed176', 'sed:sed177', 'sed:sed178', 'sed:sed179', 'uglify:plone']);
grunt.registerTask('compile-resourceregistry',["requirejs:resourceregistry", 'less:resourceregistry', 'sed:sed180', 'sed:sed181', 'sed:sed182', 'sed:sed183', 'sed:sed184', 'sed:sed185', 'sed:sed186', 'sed:sed187', 'sed:sed188', 'sed:sed189', 'sed:sed190', 'sed:sed191', 'sed:sed192', 'sed:sed193', 'sed:sed194', 'sed:sed195', 'sed:sed196', 'sed:sed197', 'sed:sed198', 'sed:sed199', 'sed:sed200', 'sed:sed201', 'sed:sed202', 'sed:sed203', 'sed:sed204', 'sed:sed205', 'sed:sed206', 'sed:sed207', 'sed:sed208', 'sed:sed209', 'sed:sed210', 'sed:sed211', 'sed:sed212', 'sed:sed213', 'sed:sed214', 'sed:sed215', 'uglify:resourceregistry']);
grunt.registerTask('compile-thememapper',["requirejs:thememapper", 'less:thememapper', 'sed:sed216', 'sed:sed217', 'sed:sed218', 'sed:sed219', 'sed:sed220', 'sed:sed221', 'sed:sed222', 'sed:sed223', 'sed:sed224', 'sed:sed225', 'sed:sed226', 'sed:sed227', 'sed:sed228', 'sed:sed229', 'sed:sed230', 'sed:sed231', 'sed:sed232', 'sed:sed233', 'sed:sed234', 'sed:sed235', 'sed:sed236', 'sed:sed237', 'sed:sed238', 'sed:sed239', 'sed:sed240', 'sed:sed241', 'sed:sed242', 'sed:sed243', 'sed:sed244', 'sed:sed245', 'sed:sed246', 'sed:sed247', 'sed:sed248', 'sed:sed249', 'sed:sed250', 'sed:sed251', 'uglify:thememapper']);
grunt.registerTask('compile-webcouturier.dropdownmenu',[ 'less:webcouturier.dropdownmenu', 'sed:sed252', 'sed:sed253', 'sed:sed254', 'sed:sed255', 'sed:sed256', 'sed:sed257', 'sed:sed258', 'sed:sed259', 'sed:sed260', 'sed:sed261', 'sed:sed262', 'sed:sed263', 'sed:sed264', 'sed:sed265', 'sed:sed266', 'sed:sed267', 'sed:sed268', 'sed:sed269', 'sed:sed270', 'sed:sed271', 'sed:sed272', 'sed:sed273', 'sed:sed274', 'sed:sed275', 'sed:sed276', 'sed:sed277', 'sed:sed278', 'sed:sed279', 'sed:sed280', 'sed:sed281', 'sed:sed282', 'sed:sed283', 'sed:sed284', 'sed:sed285', 'sed:sed286', 'sed:sed287', 'uglify:webcouturier.dropdownmenu']);
}
