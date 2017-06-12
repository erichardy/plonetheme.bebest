
function onEachFeature(feature, layer) {
	layer.on('click', function (e) {
		title = " ";
		console.log(feature.properties.name);
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
        // console.log(feature.properties.name);
        $("#feature-infos").fadeOut(8000);
	});
}

function layerClic(layer, e) {
	console.log(e.latlng);
	console.log(e.target);
	console.log(layer);
}

if (typeof(zoom) === "undefined") {
	var zoom = 4;
}

if (typeof(center) === "undefined") {
	var center = [48.40003249610685, -4.5263671875];
}

/* initialisation de la carte */
var mymap = L.map('bebest-map', {
  center: center,
  zoom: zoom
});

/* les tuiles */
var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 	attribution: 'OpenStreetMap',  //Attribution du nom OpenStreetMap en bas a droit a coté du lien Leaflet
	minZoom: 2 //Zoom minimum, on peut pas zoomer moins que ça comme ça on évite une répétition trop grande de la map.
});

var wsm = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.png', { //Appel du tilelayer WorldStreetMap
	attribution: 'WorldStreetMap', //Attribution du nom WorldStreetMap en bas a droit a coté du lien Leaflet
	minZoom: 2	 //Zoom minimum, on peut pas zoomer moins que ça comme ça on évite une répétition trop grande de la map.
}); 


osm.addTo(mymap);
mymap.addLayer(wsm);

/* icone de point */
var bebestIcon = L.icon({
    iconUrl: '++theme++plonetheme.bebest/images/leaflet/icon-orange.png',	
    iconSize:     [27, 40],
    iconAnchor:   [13, 40],
    popupAnchor:  [0, -40]
});

/* controle de changement de layer osm vs WorldStreetMap */
var baseLayers = {
		"OpenStreetmap": osm, 
		"WorldStreetMap": wsm
};

L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';

var overlayMaps = {}
fLen = missionsFeatures.length;
for (n = 0; n < fLen ; n++) {
	features = missionsFeatures[n];
	layer = L.geoJson();
	for (i = 0; i < features['features'].length ; i++) {
		f = features['features'][i];
		style = {};
		if (f.properties['stroke']) {
			style['color'] = f.properties['stroke'];
		}
		if (f.properties['stroke-width']) {
			// stroke-
			style['weight'] = f.properties['stroke-width'];
		}
		if (f.properties['fill']) {
			style['fillColor'] = f.properties['fill'];
		}
		// onEachFeature(f, layer);
		if (f.properties && f.properties.name) {
			console.log(f.properties.name);
			layer.bindPopup(f.properties.name);
		}
		layer.addData(f);
	}
	// on passe le nom, le sous-titre et l'URL de la mission
	popupContent = '<h2><a href="' + missionsURL[n] + '">' + missionsNames[n] + '</a></h2>';
	popupContent += '<br />';
	popupContent += missionsSubtitle[n];
	layer.bindPopup(popupContent);
	overlayMaps[missionsNames[n]] = layer;
	layer.addTo(mymap);
}

//Bouton pour permettre au utilisateurs de choisir la map, controle la variable si dessus.
// L'option ``collapsed`` permet que la liste des layers soir ouverte par defaut
L.control.layers(baseLayers, overlayMaps, {collapsed:false}).addTo(mymap);
// L.control.layers(baseLayers, overlayMaps).addTo(mymap);
// $("input.leaflet-control-layers-selector").prop("checked", true);

L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';

/* Pour positionner de facon fixe la fenetre d'info, la difficulte etait dans le 
 * fait que l'attribut css "position: absolute" s'applique relativement a l'ancetre
 * le plus proche qui a ete positione _explicitement_. Or, les "<section>" ne sont pas
 * positionnees. La solution consiste donc a aller chercher dynamiquement la position de
 * la section qui contient la carte et d'afficher le popup d'info relativement a
 * cette derniere. 
 */
position = $("#bebest-map").position();
$("#feature-infos").css("top", position.top + 100);
$("#feature-infos").css("left", position.left + 10);





/* code fortement inspire de http://jsfiddle.net/expedio/z1nw3pt4/  pour le popup
 * quand on clique sur un point, une ligne ou un polygone
 * */
/* Pour les options de style, voir http://leafletjs.com/reference.html#path */
/*
props = ['']
for (i = 0; i < features['features'].length ; i++) {
	f = features['features'][i];
	// console.log(f);
	style = {};
	if (f.properties['stroke']) {
		style['color'] = f.properties['stroke'];
	}
	if (f.properties['stroke-width']) {
		// stroke-
		style['weight'] = f.properties['stroke-width'];
	}
	if (f.properties['fill']) {
		style['fillColor'] = f.properties['fill'];
	}
	L.geoJson(f, {
		"style": style
	}).addTo(mymap)
}

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
        // console.log(feature.properties.name);
        $("#feature-infos").fadeOut(8000);
	});
}

geojsonLayer = L.geoJson(features, {
    onEachFeature: onEachFeature
}).addTo(mymap);

*/
// mymap.addLayer(geojsonLayer);
