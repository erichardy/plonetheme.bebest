
/* initialisation de la carte */
var mymap = L.map('bebest-map', {
  center:[48.356248, -4.596884],
  zoom: 3
});

/* les tuiles */
var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 	attribution: 'OpenStreetMap',  //Attribution du nom OpenStreetMap en bas a droit a coté du lien Leaflet
	minZoom: 2 //Zoom minimum, on peut pas zoomer moins que ça comme ça on évite une répétition trop grande de la map.
});

var stamenTiles = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', { //Appel du tilelayer StamenToner
	attribution: 'StamenToner', //Attribution du nom StamenToner en bas a droit a coté du lien Leaflet
	minZoom: 2	 //Zoom minimum, on peut pas zoomer moins que ça comme ça on évite une répétition trop grande de la map.
}); 

osm.addTo(mymap);
mymap.addLayer(stamenTiles);

/* icone de point */
var bebestIcon = L.icon({ // Appel de la variable Bebesticon pour personnaliser le marker
    iconUrl: '++theme++plonetheme.bebest/images/leaflet/icon-orange.png', //Url du l'image icone
	
    iconSize:     [27, 40], // Taille de l'icone
    iconAnchor:   [13, 40], // Point de l'icone où se trouve la location exacte du marker
    popupAnchor:  [0, -40] // Point de l'icone où se trouvera le debut de la popup par rapport a l'iconAnchor
});

/* controle de changement de layer osm vs stamenTiles */
var baseLayers = { //Appel des différents layers
		"OpenStreetmap": osm, 
		"Stamen Toner": stamenTiles
};
L.control.layers(baseLayers).addTo(mymap); // Bouton pour permettre au utilisateurs de choisir la map, controle la variable si dessus.


L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';


/* Pour positionner de facon fixe la fenetre d'info, la difficulte etait dans le 
 * fait que l'attribut css "position: absolute" s'applique relativement a l'ancetre
 * le plus proche qui a ete positione _explicitement_. Or, les "<section>" ne sont pas
 * positionnees. La solution consiste donc a aller chercher dynamiquement la position de
 * la section qui contient la carte et d'afficher le popup d'info relativement a
 * cette derniere. 
 */
position = $("#bebest-home-map").position();
$("#feature-infos").css("top", position.top + 100);
$("#feature-infos").css("left", position.left + 10);

/* code fortement inspire de http://jsfiddle.net/expedio/z1nw3pt4/  pour le popup
 * quand on clique sur un point, une ligne ou un polygone
 * */
/* Pour les options de style, voir http://leafletjs.com/reference.html#path */
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
// mymap.addLayer(geojsonLayer);
