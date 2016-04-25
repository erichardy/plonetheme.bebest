var mymap = L.map('nicemap', {
  center:[65.505, -45.09],
  zoom: 3
});


var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution:'OpenStreetMap'
});

var stamenTiles = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
  attribution: 'StamenToner'
}); 
/*
var L.marker = L.icon({
    iconUrl: 'marker-icon.svg',
    shadowUrl: 'marker-shadow.png',

    iconSize:     [25, 41], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

*/
var marker = L.marker([48.355, -4.572]).addTo(mymap);

osm.addTo(mymap);
marker.bindPopup("<b><u>IUEM et LEMAR</b></u><br>Laboratoires investis dans le projet BEBEST.").openPopup();

var marker = L.marker([48.455, -68.472]).addTo(mymap);
marker.bindPopup("<b><u>UQAR</b></u><br>Laboratoire investis dans le projet BEBEST.").openPopup();

var marker = L.marker([78.5, 10.75]).addTo(mymap);
marker.bindPopup("<b><u>Svalbard project</b></u><br>Laboratoire investis dans le projet BEBEST.").openPopup(); 

mymap.addLayer(stamenTiles);
var baseLayers = {
		"OpenStreetmap": osm,
		"Stamen Toner": stamenTiles
};

L.control.layers(baseLayers).addTo(mymap);