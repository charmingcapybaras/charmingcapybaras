const mongoose = require('mongoose');
var axios = require('axios');
const _ = require('underscore');

mongoose.connect('mongodb://127.0.0.1/fridayhero');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
var User = require('./../database/models/user');

var getUserAgenda = () => {
  axios
    .get('http://localhost:3000/api/user')
    .then(response => {
      // console.log('getUserAgenda');
      // console.log('response from getUserAgenda', response.data);
      console.log('number of records ', response.data.length);
      response.data.map(user => {
        return axios
          .get('http://localhost:3000/sample_data/data.json')
          .then(response => {
            var best = _.filter(response.data.results, item => {
              return (
                item.rating > user.rating && item.price_level >= user.price
              );
            });

            // console.log('best name ', best[0].name);
            // console.log('item.city ', user.city);
            // console.log('=============================================');

            // insert into datbase
            console.log('--------------------------------');
            console.log('user id ', user._id);
            console.log('can i get best here ', best[0].name);
            console.log('--------------------------------');

            let dataRecord = {
              venuename: best[0].name,
              rating: best[0].rating,
              price_level: best[0].price_level,
              date: new Date()
            };

            User.findOneAndUpdate(
              { _id: user._id },
              { $push: { agenda: dataRecord } },
              { upsert: true },
              () => {
                console.log('inserted succsssfully');
              }
            );
          })
          .catch(error => {
            console.log('error from the local data call');
          });
      }); // end of map around the item.
      // response.data.forEach(record => {
      //   console.log('record is here ==> ', record._id);
      // });

      // return response.data;
    })
    .catch(error => {
      console.log('error in utils getUserAgenda ', error);
    });
};

module.exports = {
  getUserAgenda
};
