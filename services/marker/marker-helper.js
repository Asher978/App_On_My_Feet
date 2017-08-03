require('isomorphic-fetch');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

function getLngLat (req, res, next) {
    console.log('Hello from marker-helper.js');
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.street1}%20and%20${req.body.street2},%20${req.body.city}&key=${API_KEY}`)
    .then(fetchRes => {
        return fetchRes.json();
        next();
    }).then(jsonRes => {
        // console.log(jsonRes);
        res.locals.lat = jsonRes.results[0].geometry.location.lat;
        res.locals.lng = jsonRes.results[0].geometry.location.lng;
        console.log(`Lat${res.locals.lat}, Long: ${res.locals.lng}`)
        next();
    }).catch(err => {
        console.log(err);
        next();
    }) 
}

module.exports = {getLngLat};