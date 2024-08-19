// Inicializar el mapa
var map = L.map('map').setView([-34.6037, -58.3816], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

// Crear los marcadores
var marker1 = L.marker([-34.6025246, -58.3843585]).bindPopup('Primera heladera').openPopup().addTo(map);
var marker2 = L.marker([-34.6024605, -58.3812774]).bindPopup('Segunda heladera').openPopup().addTo(map);
var marker3 = L.marker([-34.6047476, -58.3795161]).bindPopup('Tercera heladera').openPopup().addTo(map);

// Agrupar los marcadores en un LayerGroup
var markersLayer = new L.LayerGroup([marker1, marker2, marker3]).addTo(map);

// PinSearch component
var searchBar = L.control.pinSearch({
    position: 'topright',
    placeholder: 'Buscar Heladera...',
    buttonText: 'Search',
    onSearch: function(query) {
        console.log('Search query:', query);
        // Handle the search query here
    },
    searchBarWidth: '200px',
    searchBarHeight: '30px',
    maxSearchResults: 3
}).addTo(map);

// Capturar clics en el mapa para posicionar un marcador
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
