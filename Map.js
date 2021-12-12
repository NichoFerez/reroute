	mapboxgl.accessToken = 'pk.eyJ1IjoibmljaG9mZXJleiIsImEiOiJja2R6MGozYjkyZmpoMzBscTBweHg1dWRjIn0.0hLtqRVLovWKojOT_EWixQ';


var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/nichoferez/cki5awdxb2guv1apc7mlbjsyc', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});