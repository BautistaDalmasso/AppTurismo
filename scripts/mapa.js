var map;
var _markers = {};

function iniciarMapa() { 
    map = L.map('map').setView([-34.5433, -58.7000], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

function agregarMarker(id, posicion, texto) {
    _markers[id] = L.marker(posicion)
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

function irA(posicion) {
    map.flyTo(posicion);
}
