var map = L.map('map') // don't need # because leaflet accounts
// satellite view
var sat = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA');
sat.addTo(map); // choose tiles
map.setView([33.983265, -118.306799], 18); // set intial view, second value is zoom level

homicides.forEach(obj =>
	L.circleMarker([obj.latitude,  obj.longitude])
	    .addTo(map)
		.bindTooltip(`${obj.first_name} ${obj.last_name}`, {permanent: true}));

var sat2 = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA', {
    maxZoom: 8 // don't want super close for perspective
});
var mini = new L.Control.MiniMap(sat2); // create new layer
mini.addTo(map);