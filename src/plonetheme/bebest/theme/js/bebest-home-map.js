
/* initialisation de la carte */
var mymap = L.map('bebest-map', {
  center:[48.356248, -4.596884],
  zoom: 3,
  scrollWheelZoom:false
});

/* les tuiles */
var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap',  //Attribution du nom OpenStreetMap en bas a droit a coté du lien Leaflet
    minZoom: 2 //Zoom minimum, on peut pas zoomer moins que ça comme ça on évite une répétition trop grande de la map.
});

var wsm = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', { //Appel du tilelayer StamenToner
    attribution: 'WorldStreeMap', //Attribution du nom StamenToner en bas a droit a coté du lien Leaflet
    minZoom: 2   //Zoom minimum, on peut pas zoomer moins que ça comme ça on évite une répétition trop grande de la map.
}); 

osm.addTo(mymap);
mymap.addLayer(wsm);


/* controle de changement de layer osm vs wsm */
var baseLayers = { //Appel des différents layers
        "OpenStreetmap": osm, 
        "WorldStreeMap": wsm
};
L.control.layers(baseLayers).addTo(mymap); // Bouton pour permettre au utilisateurs de choisir la map, controle la variable si dessus.


L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/v1.0.0beta0.0/images';


/* Pour positionner de facon fixe la fenetre d'info, la difficulte etait dans le 
 * fait que l'attribut css "position: absolute" s'applique relativement a l'ancetre
 * le plus proche qui a ete positione _explicitement_. Or, les "<section>" ne sont pas
 * positionnees. La solution consiste donc a aller chercher dynamiquement la position de
 * la section qui contient la carte et d'afficher le popup d'info relativement a
 * cette derniere. 
 
position = $("#bebest-home-map").position();
$("#feature-infos").css("top", position.top + 100);
$("#feature-infos").css("left", position.left + 10);
*/
/* code fortement instpire de http://jsfiddle.net/expedio/z1nw3pt4/  pour le popup
 * quand on clique sur un point, une ligne ou un polygone
 * */
/*
geojsonLayer = L.geoJson(features, {
    onEachFeature: function (feature, layer) {
        layer.on('click', function (e) {
            title = '<h3>' + feature.properties.name + '</h3>';
            document.getElementById("bebest-feature-name").innerHTML = title;
            if (feature.properties.description) {
                document.getElementById("bebest-feature-description").innerHTML = feature.properties.description;
            }
            else {
                document.getElementById("bebest-feature-description").innerHTML = "";
            }
            $("#feature-infos").stop();
            $("#feature-infos").fadeIn("fast");
            // console.log(feature.properties.name);
            $("#feature-infos").fadeOut(8000);
        });
    }
}).addTo(mymap);
*/
// mymap.addLayer(geojsonLayer);
