var map;
var _markers = {};

function iniciarMapa() { 
    map = L.map('map').setView([-34.5433, -58.7000], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

function dibujarMarker(id, posicion, texto) {
    _markers[id] = L.marker(posicion).addTo(map)
                    .bindPopup(texto);
}

function setMarkerVisibility(id, visible) {
    let marker = _markers[id];
    if (visible && !map.hasLayer(_markers)) {
        map.addLayer(marker);
    } else if (!visible && map.hasLayer(marker)) {
        map.removeLayer(marker);
    }
}
