const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../../database/index');
const axios = require('axios');
const User = require('../../database/models/user');
// const config = require('../../config/config');

// const geocode_api = config.google_geocode_api;

// router.get('/', (req, res, next) => {
//   res.status(201).send('hello from express');
// });

// router.get('/api', (req, res, next) => {
//   res.status(201).send('api endpoint');
// });

router.get('/api/user/', (req, res, next) => {
  User.find(function(err, itms) {
    if (err) {
      console.log(err);
    } else {
      res.json(itms);
    }
  });
});

router.get(
  '/api/user/:id',
  (req, res, next) => {
    db.userById(req.params.id);
    //res.status(201).send('specific user endpoint')
    next();
  },
  (req, res) => {
    res.status(201).send('specific user endpoint');
  }
);

router.post('/api/user', (req, res) => {
  var user = new User(req.body);

  var city = encodeURI(req.body.city);
  var state = encodeURI(req.body.state);
  var address = encodeURI(req.body.street);

  console.log(address, city, state);

  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address},${city},${state}&key=${geocode_api}`
    )
    .then(response => {
      // get the location back in coordinates
      console.log('lat', response.data.results[0].geometry.location);
      user.lat = response.data.results[0].geometry.location.lat;
      user.lng = response.data.results[0].geometry.location.lng;
      user.experiences = ['sophisticated', 'trendy', 'bohemian'];

      //  save the new user:
      user.save(err => {
        if (err) {
          console.log('problem adding user', err);
        } else {
          res.status(201).send();
        }
      });
    })
    .catch(err => {
      console.log('err on user', err);
      res.status(500).send();
    });

  console.log(user);
});

module.exports = router;
