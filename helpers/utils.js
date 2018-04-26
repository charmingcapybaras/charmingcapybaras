const mongoose = require('mongoose');
var axios = require('axios');
const _ = require('underscore');
var config = require('../config/config');

mongoose.connect('mongodb://127.0.0.1/fridayhero');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
var Agenda = require('./../database/models/agenda');

var getUserAgenda = () => {
  axios
    .get('http://localhost:3000/agendas')
    .then(response => {
      // console.log('getUserAgenda');
      // console.log('response from getUserAgenda', response.data);
      // console.log('number of records ', response.data.length);
      response.data.map(user => {
        return (
          axios
            // was.get('http://localhost:3000/sample_data/data.json')
            //
            .get(
              `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
                user.lat
              },${user.lng}&radius=1500&maxprice=${
                user.price_level
              }&type=restaurant&key=${config.google_places_api}`
            )
            .then(response => {
              // console.log(
              //   'response from google places ',
              //   response.data.results
              // );

              console.log('===============================');
              console.log(
                'response.data.results ',
                response.data.results[0].name
              );
              console.log('===============================');

              var venue = _.filter(response.data.results, item => {
                return (
                  item.rating > user.rating
                  // && item.price_level >= user.price_level
                );
              });
              console.log('===============================');
              // console.log('venue ', venue);
              console.log('===============================');

              // get the detail of specific venue
              return axios
                .get(
                  `https://maps.googleapis.com/maps/api/place/details/json?placeid=${
                    venue[0].place_id
                  }&key=${config.google_places_api}`
                )
                .then(response => {
                  console.log('in the details response', venue[0].place_id);
                  let venueDetails = response.data.result;
                  venueDetails.date = new Date();
                  // console.log('venueDetails ', response.data.result);
                  // return venueDetails;

                  // insert into datbase
                  console.log('--------------------------------');
                  console.log('helpers/utils.js user id ', user.user_id);
                  console.log('helpers/utils.js venu name ', venue[0].name);
                  console.log('--------------------------------');
                  console.log('--------------------------------');

                  // let dataRecord = {
                  //   venuename: venue[0].name,
                  //   rating: venue[0].rating,
                  //   price_level: venue[0].price_level,
                  //   vicinity: venue[0].vicinity,
                  //   types: venue[0].types,
                  //   lat: venue[0].geometry.location.lat,
                  //   lng: venue[0].geometry.location.lng,
                  //   date: new Date()
                  // };

                  Agenda.findOneAndUpdate(
                    { _id: user._id },
                    { $push: { agenda: venueDetails } },
                    { upsert: true },
                    () => {
                      console.log('inserted succsssfully');
                    }
                  );
                })
                .catch(err => {
                  console.log('problem with detail places call ', err);
                });
            })
            .catch(error => {
              console.log('error from the local data call', error);
            })
        );
      });
    })
    .catch(error => {
      console.log('error in utils getUserAgenda ', error);
    });
};

module.exports = {
  getUserAgenda
};
