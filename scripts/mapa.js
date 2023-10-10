var map;

function iniciarMapa() { 
    map = L.map('map').setView([-34.5433, -58.7000], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

function dibujarPopup(posicion, texto) {
    console.log(map);
    L.marker(posicion).addTo(map)
    .bindPopup(texto)
    .openPopup();
}
