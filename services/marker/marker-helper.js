require('isomorphic-fetch');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

// src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCY1wx8dCD5FOnocfJzK2W5dXq2-fy7-VY&callback=initMap'>

function googleMarker (req, res, next) {
    console.log('Hello from marker-helper.js')
}



module.exports = googleMarker;