
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

var rocket = L.Icon ({
	iconUrl: 'icon-orange.png'
});

/* A partir des properties qui sont positionnees avec le site
 * http://geojson.io/ , on etabli le dictionnaire des styles
 * necessaire a leaflet
 */
function styleFromFeature(f) {
	style = {}
	if (f.properties['stroke']) {
		style['color'] = f.properties['stroke'];
		f.properties['stroke'] = true;
	}
	if (f.properties['color']) {
		style['color'] = f.properties['color'];
		f.properties['stroke'] = true;
	}
	if (f.properties['marker-color']) {
		style['color'] = f.properties['marker-color'];
		f.properties['color'] = f.properties['marker-color'];
	}
	if (f.properties['stroke-width']) {
		style['weight'] = f.properties['stroke-width'];
		f.properties['weight'] = f.properties['stroke-width'];
	}
	if (f.properties['stroke-opacity']) {
		style['opacity'] = f.properties['stroke-opacity'];
		f.properties['opacity'] = f.properties['stroke-opacity']
	}
	if (f.properties['fill']) {
		style['fillColor'] = f.properties['fill'];
		style['fill'] = true;
		f.properties['fillColor'] = f.properties['fill'];
		f.properties['fill'] = true;
	}
	if (f.properties['fill-opacity']) {
		style['fillOpacity'] = f.properties['fill-opacity'];
		f.properties['fillOpacity'] = f.properties['fill-opacity'];
	}
	style['iconUrl'] = 'icon-orange.png';
	return style
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
 	attribution: 'OpenStreetMap',  // Affichage du nom OpenStreetMap en bas a droit a coté du lien Leaflet
	minZoom: 2 //Zoom minimum
});

var stamenTiles = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', { //Appel du tilelayer StamenToner
	attribution: 'StamenToner', // Affichage du nom StamenToner en bas a droit a coté du lien Leaflet
	minZoom: 2	 //Zoom minimum
}); 

osm.addTo(mymap);
mymap.addLayer(stamenTiles);

/* icone de point */
var bebestIcon = L.icon({
    iconUrl: '++theme++plonetheme.bebest/images/leaflet/icon-orange.png',	
    iconSize:     [27, 40],
    iconAnchor:   [13, 40],
    popupAnchor:  [0, -40]
});



/* controle de changement de layer osm vs stamenTiles */
var baseLayers = {
		"OpenStreetmap": osm, 
		"Stamen Toner": stamenTiles
};

// L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';
// L.Icon.Default.imagePath = '++theme++plonetheme.bebest/images/leaflet/' ;
L.Icon.Default.imagePath = 'markers';

function markerIcon(feature) {
	if ((feature.properties['icon']) && (feature.properties['icon'] !== 'undefined')) {
		return iconList[feature.properties['icon']]
	}
	console.log(defaultIcon);
	return defaultIcon
}

// Cas des mission, on a une 'FeatureCollection'
if (typeof missionsFeatures !== 'undefined'){
	var overlayMaps = {} ;
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
			layer.on('click', function (e){
				console.log(f);
				$("#feature-info h3").html(f.properties['name']);
				$("#feature-info p").html(f.properties['description']);
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
			$("#feature-info a").attr("href" , url);
		});
	}
}

//Bouton pour permettre au utilisateurs de choisir la map, controle la variable si dessus.
//L'option ``collapsed`` permet que la liste des layers soit ouverte par defaut
L.control.layers(baseLayers, overlayMaps, {collapsed:false}).addTo(mymap);

function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}
mymap.on('click', onMapClick);

//$("input.leaflet-control-layers-selector").prop("checked", true);

