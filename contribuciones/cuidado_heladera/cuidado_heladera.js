var map = L.map('map').setView([-34.6037, -58.3816], 13); // Coordenadas iniciales centradas en Buenos Aires
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

var marker;

map.on('click', function(e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;

    if (marker) {
        marker.setLatLng(e.latlng);
    }

    document.getElementById('latitude').value = lat;
    document.getElementById('longitude').value = lng;
});

L.marker([-34.6025246,-58.3843585]).bindPopup('Primera heladera').openPopup().addTo(map);
L.marker([-34.6024605,-58.3812774]).bindPopup('Segunda heladera').openPopup().addTo(map);
L.marker([-34.6047476,-58.3795161]).bindPopup('Tercera heladera').openPopup().addTo(map);