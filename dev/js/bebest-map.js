var mymap = L.map('bebest-map', { //definition du zoom initai
  center:[65.505, -45.09],
  zoom: 3
});


var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution:'OpenStreetMap',
	minZoom: 2
});

var stamenTiles = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
	attribution: 'StamenToner', 
	minZoom: 2	
}); 

var bebestIcon = L.icon({ // icone personnalisée
    iconUrl: 'images/map/icon-blue.png',

    iconSize:     [27, 40], // size of the icon
    iconAnchor:   [13, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

mymap.addLayer(stamenTiles); // charger les differents fonds de carte ici
var baseLayers = {
		"OpenStreetmap": osm,
		"Stamen Toner": stamenTiles
};

L.control.layers(baseLayers).addTo(mymap); // offrir à l'utilisateur la possibilité de changer le fond de carte (affihage des layers)

// début des points

var marker = L.marker([51.5, -0.09], {icon: bebestIcon}).addTo(mymap);
    
/*	onEachFeature: function (feature, layer) {
        //layer.bindPopup(feature.properties.GPSUserName);

        layer.on('click', function (e) {
            document.getElementById("info").innerHTML = feature.properties.name;
            $("#feature_infos").stop();
            $("#feature_infos").fadeIn("fast");

            console.log(feature.properties.name);
            $("#feature_infos").fadeOut(5000);
            // This is your click handler. 
            // Your feature is available here as e.target, and the 
            //featureInfo object we added is available as e.target.featureInfo 
        });
    } */

var marker = L.marker([48.455, -68.472], {icon: bebestIcon}).addTo(mymap);
marker.bindPopup("<b><u>UQAR</b></u><br>Laboratoire investis dans le projet BEBEST.").openPopup();

var marker = L.marker([78.5, 10.75], {icon: bebestIcon}).addTo(mymap);
marker.bindPopup("<b><u>Svalbard project</b></u><br>Laboratoire investis dans le projet BEBEST.").openPopup(); 