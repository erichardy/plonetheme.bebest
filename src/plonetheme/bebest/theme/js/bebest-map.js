
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

L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';

// on est dans le cas, ici ou on travaille avec une 'FeatureCollection'
// i.e. : les missions
if (typeof missionsFeatures !== 'undefined'){
	var overlayMaps = {} ;
	fLen = missionsFeatures['features'].length;
	L.geoJson(missionsFeatures, {
		style: function(f){
			styles = {};
			if (f.properties['stroke']) {
				styles['color'] = f.properties['stroke'];
			}
			if (f.properties['stroke-width']) {
				styles['weight'] = f.properties['stroke-width'];
			}
		},
		onEachFeature: function(f, layer) {
			overlayMaps[f['properties']['mission']] = layer ;
			layer.on('click', function (e){
				$("#feature-info h3").html(f.properties['name']);
				$("#feature-info p").html(f.properties['description']);
				$("#feature-info a").attr('href', f.properties['url']);
			})
			
		}
	}).addTo(mymap);
}

if (typeof featuresCollections !== 'undefined'){
	fLen = featuresCollections.length;
	var overlayMaps = {};
	for (n = 0; n < fLen ; n++) {
		layer = L.geoJson();
		featuresCollection = featuresCollections[n];

		for (i = 0; i < featuresCollection['features'].length ; i++) {
			f = featuresCollection['features'][i];
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
			layer.addData(f);
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

//$("input.leaflet-control-layers-selector").prop("checked", true);

L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';
