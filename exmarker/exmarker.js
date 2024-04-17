/* Définition du centre de la carte et du zoom (valeur initiale) */
const carte = L.map('map').setView([51.505, -0.09], 13);

/* ajout d'un background */
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(carte);

/* Ajout d'un marqueur de base */
var marker = L.marker([51.5,0]).addTo(carte);

/* Ajout d'un popup */
const monPopup = "<h3>Je suis ici!</h3><p class='rouge'>Au centre de <a target='_blank' href='https://fr.wikipedia.org/wiki/Londres'>Londres</a></p>";

marker.bindPopup(monPopup);

var monIcon = L.icon({
    iconUrl: 'red_map_marker.svg',
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: [0,-64]
});

const marker2 =  L.marker([51.5,-0.1],{icon:monIcon}).addTo(carte);

marker2.bindPopup("Je suis l'icône rouge");