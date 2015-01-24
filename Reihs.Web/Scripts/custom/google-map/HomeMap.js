var gMap = {};

gMap.initialize = function () {
	var myLatlng = new google.maps.LatLng(33.1100367, -96.807473296);
	var style = [{ "featureType": "all", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "weight": "0.5" }, { "visibility": "on" }] }, { "featureType": "administrative", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "administrative", "elementType": "labels.text", "stylers": [{ "lightness": "-50" }, { "saturation": "-50" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text", "stylers": [{ "hue": "#009aff" }, { "saturation": "25" }, { "lightness": "0" }, { "visibility": "simplified" }, { "gamma": "1" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "saturation": "0" }, { "lightness": "0" }, { "gamma": "1.50" }, { "visibility": "on" }] }, { "featureType": "landscape", "elementType": "labels", "stylers": [{ "visibility": "simplified" }, { "lightness": "20" }, { "gamma": "1" }] }, { "featureType": "landscape", "elementType": "labels.text.fill", "stylers": [{ "saturation": "-100" }, { "lightness": "-100" }] }, { "featureType": "landscape", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "lightness": "0" }, { "saturation": "-25" }, { "gamma": "2" }, { "visibility": "simplified" }, { "hue": "#66ff00" }] }, { "featureType": "poi.park", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "road", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }, { "color": "#666666" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "gamma": "2" }, { "lightness": "0" }, { "saturation": "0" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "lightness": "100" }] }, { "featureType": "transit", "elementType": "labels.icon", "stylers": [{ "saturation": "-25" }] }, { "featureType": "transit.line", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "transit.station.airport", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "lightness": "40" }, { "gamma": "0.4" }, { "saturation": "-40" }, { "hue": "#009aff" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "water", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }];

	var mapOptions = {
		center: myLatlng,
		zoom: 12,
		styles: style,
		draggable: false,
		scrollwheel: false,
		panControl: false,
		mapTypeControl: false
	};
	var map = new google.maps.Map(document.getElementById('location'),
	    mapOptions);

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'LeBeau Visage'
	});
};

gMap.initLocations = function () {
	var myLatlng = new google.maps.LatLng(33.1100367, -96.807473296);
	var style = [{ "featureType": "all", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "weight": "0.5" }, { "visibility": "on" }] }, { "featureType": "administrative", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "administrative", "elementType": "labels.text", "stylers": [{ "lightness": "-50" }, { "saturation": "-50" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text", "stylers": [{ "hue": "#009aff" }, { "saturation": "25" }, { "lightness": "0" }, { "visibility": "simplified" }, { "gamma": "1" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "saturation": "0" }, { "lightness": "0" }, { "gamma": "1.50" }, { "visibility": "on" }] }, { "featureType": "landscape", "elementType": "labels", "stylers": [{ "visibility": "simplified" }, { "lightness": "20" }, { "gamma": "1" }] }, { "featureType": "landscape", "elementType": "labels.text.fill", "stylers": [{ "saturation": "-100" }, { "lightness": "-100" }] }, { "featureType": "landscape", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "lightness": "0" }, { "saturation": "-25" }, { "gamma": "2" }, { "visibility": "simplified" }, { "hue": "#66ff00" }] }, { "featureType": "poi.park", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "road", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }, { "color": "#666666" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "gamma": "2" }, { "lightness": "0" }, { "saturation": "0" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "lightness": "100" }] }, { "featureType": "transit", "elementType": "labels.icon", "stylers": [{ "saturation": "-25" }] }, { "featureType": "transit.line", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "transit.station.airport", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "lightness": "40" }, { "gamma": "0.4" }, { "saturation": "-40" }, { "hue": "#009aff" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "water", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }];

	var mapOptions = {
		center: myLatlng,
		zoom: 8,
		styles: style,
		mapTypeControl: false
	};
	var map = new google.maps.Map(document.getElementById('location'),
	    mapOptions);

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'LeBeau Visage'
	});
};





