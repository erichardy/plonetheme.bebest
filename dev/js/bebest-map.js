var mymap = L.map('bebest-map', { //Appel de la map leaflet bebest par la variable my map
  center:[65.505, -45.09], //Position initial sur la map
  zoom: 3 //Zoom initial 3, le zoom leaflet allant de 0 à 15.
});


var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { //Appel du tilelayer OpenStreetMap
	attribution:'OpenStreetMap',  //Attribution du nom OpenStreetMap en bas a droit a coté du lien Leaflet
	minZoom: 2 //Zoom minimum, on peut pas zoomer moins que ça comme ça on évite une répétition trop grande de la map.
});

var stamenTiles = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', { //Appel du tilelayer StamenToner
	attribution: 'StamenToner', //Attribution du nom StamenToner en bas a droit a coté du lien Leaflet
	minZoom: 2	 //Zoom minimum, on peut pas zoomer moins que ça comme ça on évite une répétition trop grande de la map.
}); 

var bebestIcon = L.icon({ // Appel de la variable Bebesticon pour personnaliser le marker
    iconUrl: 'images/map/icon-blue.png', //Url du l'image icone

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
    
	
/*	    // create popup contents
    var customPopup = "test";
    
    // specify popup options 
    var customOptions =
        {
        'maxWidth': '300',
        'className' : 'custom'
        } 

var marker = L.marker([43.64701, -79.39425], {icon: bebestIcon}).bindPopup(customPopup,customOptions).addTo(mymap);

*/

var marker = L.marker([48.455, -68.472], {icon: bebestIcon}).addTo(mymap); //Variable Marker qui fais appel au marker leaflet avec la geolocalisation, il appelle ensuite la variable bebestIcon et ajoute a mymap.
marker.bindPopup("<div id='bebest-popup-content'><h3>UQAR</h3><br><p>Laboratoire investis dans le projet BEBEST.</p></div>").openPopup(); //Données de la popup

var marker = L.marker([78.5, 10.75], {icon: bebestIcon}).addTo(mymap); //Variable Marker qui fais appel au marker leaflet avec la geolocalisation, il appelle ensuite la variable bebestIcon et ajoute a mymap.
marker.bindPopup("<h3>Svalbard project</h3><br><p>Laboratoire investis dans le projet BEBEST.</p>").openPopup(); //Données de la popup