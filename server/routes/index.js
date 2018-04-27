const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../../database/index');
const axios = require('axios');
const Agenda = require('../../database/models/agenda');

var bcrypt = require('bcrypt');
const config = require('../../config/config');
// const util = require('../../helpers/user-status');

const geocode_api = config.google_geocode_api;

// set add agenda

router.get('/', (req, res, next) => {
  Agenda.find(function(err, itms) {
    if (err) {
      console.log(err);
    } else {
      res.json(itms);
    }
  });
});

router.get('/:id', (req, res) => {
  Agenda.findOne({ user_id: req.params.id }, (err, agenda) => {
    if (err) return res.status(500).send(err);
    // return res.status(200).json(agenda);
    res.send(agenda);
  });
});

router.post('/add', (req, res) => {
  var agenda = new Agenda(req.body);
  var city = encodeURI(req.body.city);
  var state = encodeURI(req.body.state);
  var address = encodeURI(req.body.address);
  console.log(address, city, state);

  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address},${city},${state}&key=${geocode_api}`
    )
    .then(response => {
      // get the location back in coordinates
      console.log('lat', response.data.results[0].geometry.location);
      agenda.lat = response.data.results[0].geometry.location.lat;
      agenda.lng = response.data.results[0].geometry.location.lng;

      // console.log('here is the user password... >>>>>>>>>', req.body.password)

      //   bcrypt.hash(req.body.password, 10, function(err, hash){
      //     if(err){
      //       console.log(err);
      //     }

      //     user.password = hash;
      //     console.log('this is the hash password >>>>>>>>>', user.password)
      //   });

      //  save the new user:

      Agenda.findOneAndUpdate(
        { user_id: req.body.user_id },
        { $set: agenda },
        { upsert: true },
        () => {
          console.log('inserted succsssfully');
        }
      )
        .then(res => {
          console.log('response from succesfull save ', res);
        })
        .catch(err => {
          console.log('problem saving agenda ', err);
        });
      res.json({ alert: 'Success' });
    })
    .catch(err => {
      console.log('err on user', err);
      res.status(500).send();
    });

  console.log(agenda);
});

module.exports = router;
