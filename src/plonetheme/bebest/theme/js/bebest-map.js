
/*
function onEachFeature(feature, layer) {
	layer.on('click', function (e) {
		title = " ";
		if (feature.properties.name) {
			title = '<h3>' + feature.properties.name + '</h3>';
		}
		description = " ";
		if (feature.properties.description) {
			description = feature.properties.description;
		}
		document.getElementById("bebest-feature-name").innerHTML = title;
		document.getElementById("bebest-feature-description").innerHTML = description;
		$("#feature-infos").stop();
        $("#feature-infos").fadeIn("fast");
        $("#feature-infos").fadeOut(8000);
	});
}
*/
var rocket = L.Icon ({
	iconUrl: 'marker-icon.png'
});

/* A partir des properties qui sont positionnees avec le site
 * http://geojson.io/ , on etablit le dictionnaire des styles
 * necessaires a leaflet
 */
function styleFromFeature(f) {
	style = {}
	// stroke pour geojson.io == color pour leaflet
	// stroke => color
	// utilise pour les lignes
	if (f.properties['stroke']) {
		style['color'] = f.properties['stroke'];
		f.properties['stroke'] = true;
	}
	// dans le cas ou on positione une propriete "color"
	if (f.properties['color']) {
		style['color'] = f.properties['color'];
		f.properties['stroke'] = true;
	}
	// pour les points
	if (f.properties['marker-color']) {
		style['color'] = f.properties['marker-color'];
		f.properties['color'] = f.properties['marker-color'];
	}
	// epaisseur du trait : stroke-width => weight
	if (f.properties['stroke-width']) {
		style['weight'] = f.properties['stroke-width'];
		f.properties['weight'] = f.properties['stroke-width'];
	}
	// opacite du trait : stroke-opacity => opacity
	if (f.properties['stroke-opacity']) {
		style['opacity'] = f.properties['stroke-opacity'];
		f.properties['opacity'] = f.properties['stroke-opacity']
	}
	// remplissage des polygones : fill => fillcolor
	// fill : booleen pour leafleat
	if (f.properties['fill']) {
		style['fillColor'] = f.properties['fill'];
		style['fill'] = true;
		f.properties['fillColor'] = f.properties['fill'];
		f.properties['fill'] = true;
	}
	// opacite des traits : fill-opacity => fillOpacity
	if (f.properties['fill-opacity']) {
		style['fillOpacity'] = f.properties['fill-opacity'];
		f.properties['fillOpacity'] = f.properties['fill-opacity'];
	}
	// iconUrl : a ne pas utiliser, il vaut mieux preferer 
	// "icon" : nom_icon (dans iconList)
	// iconList est un tableau contenu dans un parametre du control panel
	style['iconUrl'] = 'marker-icon.png';
	return style
}


/*
 * 
 */
function layerClic(layer, e) {
	console.log(e.latlng);
	console.log(e.target);
	console.log(layer);
}

/*
 * zoom par defaut si non present
 */
if (typeof(zoom) === "undefined") {
	var zoom = 4;
}

/*
 * centrage de la carte si non present
 */
if (typeof(center) === "undefined") {
	var center = [48.40003249610685, -4.5263671875];
}

/* initialisation de la carte */
var mymap = L.map('bebest-map', {
  center: center,
  zoom: zoom
});


var OpenMapSurfer_Roads = L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
	maxZoom: 20,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

/*
 * Lors du passage en HTTPS, de nombreux messages d'alerte en raison des
 * appels à un site HTTP.
 * Ci-dessous, on adapte donc l'URL de chargement des tuiles en fonction
 * du protocole.
 */
protocol = window.location.protocol;
osmTilesServer = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
wsmTilesServer = 'http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}';
if (protocol === 'https:'){
	osmTilesServer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	// a tenter pour WorldStreetMap....
	wsmTilesServer = 'http://{s}.server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}.png';
}
/* les tuiles */
var osm = L.tileLayer(osmTilesServer, {
 	attribution: 'OpenStreetMap',  // Affichage du nom OpenStreetMap en bas a droit a coté du lien Leaflet
	minZoom: 2 //Zoom minimum
});

var wsm = L.tileLayer(wsmTilesServer, { //Appel du tilelayer WorldSeaMap
	attribution: 'WorldSeaMap', // Affichage du nom WorldSeaMap en bas a droit a coté du lien Leaflet
	minZoom: 2	 //Zoom minimum
}); 

osm.addTo(mymap);
mymap.addLayer(osm);

/* normalement cet icone est defini dans le control panel
var bebestIcon = L.icon({
    iconUrl: '++theme++plonetheme.bebest/images/leaflet/marker-icon.png',	
    iconSize:     [27, 40],
    iconAnchor:   [13, 40],
    popupAnchor:  [0, -40]
});
*/

/*
 * controle de changement de layer osm vs wsm
*/
var baseLayers = {
		"OpenStreetmap": osm,
		"WorldSeaMap": wsm
};

// L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';
// L.Icon.Default.imagePath = '++theme++plonetheme.bebest/images/leaflet/' ;
// chemin dans portal_skins/bebest ou portal_skins/custom
L.Icon.Default.imagePath = 'markers';

/*
 * retourne l'icone en fonction de la propriete declaree dans le geojson
 */
function markerIcon(feature) {
	if ((feature.properties['icon']) && (feature.properties['icon'] !== 'undefined')) {
		return iconList[feature.properties['icon']]
	}
	// console.log(defaultIcon);
	return defaultIcon
}

// Cas des mission, on a une 'FeatureCollection'
if (typeof missionsFeatures !== 'undefined'){
	var overlayMaps = {} ;
	$("#feature-info a").hide();
	fLen = missionsFeatures['features'].length;
	L.geoJson(missionsFeatures, {
		style: function(f){
			return styleFromFeature(f);
		},
		pointToLayer: function (f, latlng) {
			return L.marker(latlng, {icon: markerIcon(f)});
		},
		onEachFeature: function(f, layer) {
			overlayMaps[f['properties']['name']] = layer ;
			// affichage dans le cartouche de droite du titres et
			// de la description de l'element quand on clique sur celui-ci dans la carte
			layer.on('click', function (e){
				// console.log(f);
				$("#feature-info h3").html(f.properties['name']);
				$("#feature-info p").html(f.properties['description']);
				$("#feature-info a").show();
				$("#feature-info a").attr('href', f.properties['url']);
			})
			
		}
	}).addTo(mymap);
}
// cas des sites d'etude et des projets. On a une liste de
// 'featuresCollection'
if (typeof featuresCollections !== 'undefined'){
	fLen = featuresCollections.length;
	var overlayMaps = {};
	$("#feature-info a").hide();
	for (n = 0; n < fLen ; n++) {
		layer = L.geoJson();
		featuresCollection = featuresCollections[n];

		for (i = 0; i < featuresCollection['features'].length ; i++) {
			f = featuresCollection['features'][i];
			L.geoJson(f, {
				style: styleFromFeature(f),
				pointToLayer: function (f, latlng) {
					return L.marker(latlng, {icon: markerIcon(f)});
				}
			}).addTo(layer);
		}
		overlayMaps[featuresCollection['name']] = layer;
		layer.addTo(mymap);
		layer.on('click', function(e){
			name = e['layer']['feature']['properties']['name'];
			description = e['layer']['feature']['properties']['description'];
			url = e['layer']['feature']['properties']['url'];
			$("#feature-info h3").html(name);
			$("#feature-info p").html(description);
			$("#feature-info a").show();
			$("#feature-info a").attr("href" , url);
		});
	}
}

//Bouton pour permettre au utilisateurs de choisir la map, controle la variable si dessus.
//L'option ``collapsed`` permet que la liste des layers soit ouverte par defaut
L.control.layers(baseLayers, overlayMaps, {collapsed:false}).addTo(mymap);

/*
 * juste un petit utilitaire qui permet d'afficher dans la console les
 * coordonnees d'un point ou l'on clique dans la carte
 */
function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}
mymap.on('click', onMapClick);

/*ajout logo apolimer sur la carte
L.Control.Watermark = L.Control.extend({
    onAdd: function(map) {
        var img = L.DomUtil.create('img');

        img.src = '../../dev/images/logo.png';
        img.style.width = '200px';

        return img;
    },

    onRemove: function(map) {
        // Nothing to do here
    }
});

L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}

L.control.watermark({ position: 'bottomleft' }).addTo(map);*/
