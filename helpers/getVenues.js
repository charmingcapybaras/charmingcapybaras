const axios = require('axios');
const config = require('../config/config');
var user = {
  price_level: 2,
  lat: 30.2775569,
  lng: -97.7508295
};

var getVenues = user => {
  return axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
      user.lat
    },${user.lng}&radius=1500&maxprice=${
      user.price_level
    }&type=restaurant&key=${config.google_places_api}`
  );
};

var getPreferredVenues = () => {
  axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ0XNo4Qi1RIYRxylNoz6Xuq0&key=${
      config.google_places_api
    }`
  );
};

axios.all([getVenues(user), getPreferredVenues()]).then(
  axios.spread(function(venues, prefVenues) {
    console.log('venues', venues.slice(0, 3), 'prefVenues', prefVenues);
  })
);

console.log(getVenues(user));
