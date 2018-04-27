const axios = require('axios');

var lat = 37.8267;
var lng = -122.4233;

let getWeather = (lat, lng) => {
  axios
    .get(`https://api.darksky.net/forecast/${config.darksky}/${lat},${lng}`)
    .then(res => {
      console.log(res.data.daily.summary);
      return res.data.daily.summary;
    })
    .catch(err => {
      console.log(err);
    });
};

getWeather();

module.exports.getWeather = getWeather;
