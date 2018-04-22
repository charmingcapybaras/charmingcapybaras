/*
  Does all the setting up of the weekly agendas for each user by
  calling the /api/user
  @author: Daren Lunsford
  @date: 18 April 2018
*/
const mongoose = require('mongoose');
var axios = require('axios');
var users = require('./utils');

console.log('usrers: expect object ', users);

mongoose.connect(
  'mongodb://127.0.0.1/fridayhero'
  //
);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
//var Agenda = require('./../database/models/agenda');

// make request to /api/users
// get all users
// loop through all users
// // each user make request to places api and get back top 2 results based on there preferences
// // // insert each record into agenda
//
//

let getAgendas = users => {
  users.forEach(record => {
    console.log('record ', record.city, record._id);
  });
};

//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-30.2144857,-95.5548986&radius=10&type=restaurant&key=AIzaSyCvoNbdXrYFfM3ZS0MxMy1j1h1nr4G9pqI

let save = weeklyAgenda => {
  weeklyAgenda.forEach(Agenda => {
    var dataRecord = {
      repo_id: repo.id,

      created_at: repo.created_at
    };

    Repo.findOneAndUpdate(
      { repo_id: dataRecord.repo_id },
      { $set: dataRecord },
      { upsert: true },
      () => {
        console.log('inserted succsssfully');
      }
    );
  }, this);
};

module.exports = getEmails;
