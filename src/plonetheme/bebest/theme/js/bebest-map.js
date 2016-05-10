
var mymap = L.map('bebest-map', { //Appel de la map leaflet bebest par la variable my map
  center:[48.356248, -4.596884], //Position initial sur la map
  zoom: 3 //Zoom initial 3, le zoom leaflet allant de 0 à 15.
});


var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { //Appel du tilelayer OpenStreetMap
	attribution:'OpenStreetMap',  //Attribution du nom OpenStreetMap en bas a droit a coté du lien Leaflet
	minZoom: 2 //Zoom minimum, on peut pas zoomer moins que ça comme ça on évite une répétition trop grande de la map.
});

osm.addTo(mymap);


var stamenTiles = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', { //Appel du tilelayer StamenToner
	attribution: 'StamenToner', //Attribution du nom StamenToner en bas a droit a coté du lien Leaflet
	minZoom: 2	 //Zoom minimum, on peut pas zoomer moins que ça comme ça on évite une répétition trop grande de la map.
}); 

var bebestIcon = L.icon({ // Appel de la variable Bebesticon pour personnaliser le marker
    iconUrl: '++theme++plonetheme.bebest/images/leaflet/icon-orange.png', //Url du l'image icone
	
    iconSize:     [27, 40], // Taille de l'icone
    iconAnchor:   [13, 40], // Point de l'icone où se trouve la location exacte du marker
    popupAnchor:  [0, -40] // Point de l'icone où se trouvera le debut de la popup par rapport a l'iconAnchor
});

mymap.addLayer(stamenTiles); // Fonctionnalité qui permet de changer le layer entre OpenStreetMap et StamenToner.

var baseLayers = { //Appel des différents layers
		"OpenStreetmap": osm, 
		"Stamen Toner": stamenTiles
};

L.control.layers(baseLayers).addTo(mymap); // Bouton pour permettre au utilisateurs de choisir la map, controle la variable si dessus.

// début des points

var marker = L.marker([51.5, -0.09], {icon: bebestIcon}).addTo(mymap); //Variable Marker qui fais appel au marker leaflet avec la geolocalisation, il appelle ensuite la variable bebestIcon et ajoute a mymap.
//données de la popup
marker.bindPopup("<div id='bebest-popup-content'><h2>IUEM<h2><hr><h3>MISSION XSZ20</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut feugiat ex. Praesent urna mi, maximus pretium dictum tristique, sodales sed enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut feugiat ex. Praesent urna mi, maximus pretium dictum tristique, sodales sed enim.. <br/><a href='#'>Click to learn more...</a></p></div>").openPopup();    
	

var marker = L.marker([48.455, -68.472], {icon: bebestIcon}).addTo(mymap); //Variable Marker qui fais appel au marker leaflet avec la geolocalisation, il appelle ensuite la variable bebestIcon et ajoute a mymap.
//données de la popup
marker.bindPopup("<div id='bebest-popup-content'><h2>UQAR<h2><hr><h3>MISSION XSZ21</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut feugiat ex. Praesent urna mi, maximus pretium dictum tristique, sodales sed enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut feugiat ex. Praesent urna mi, maximus pretium dictum tristique, sodales sed enim.. <br/><a href='#'>Click to learn more...</a></p></div>").openPopup(); 

var marker = L.marker([78.5, 10.75], {icon: bebestIcon}).addTo(mymap); //Variable Marker qui fais appel au marker leaflet avec la geolocalisation, il appelle ensuite la variable bebestIcon et ajoute a mymap.
//données de la popup
marker.bindPopup("<div id='bebest-popup-content'><h2>Svalbard<h2><hr><h3>MISSION XSZ22</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut feugiat ex. Praesent urna mi, maximus pretium dictum tristique, sodales sed enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut feugiat ex. Praesent urna mi, maximus pretium dictum tristique, sodales sed enim.. <br/><a href='#'>Click to learn more...</a></p></div>").openPopup();   




// Voilà un exemple de popup a positionnement absolu qui semble bien marcher: http://jsfiddle.net/expedio/z1nw3pt4/ 