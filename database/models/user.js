// user.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Users
let User = new Schema(
  {
    firstName: String,
    lastName: String,
    address: String,
    telephone: String,
    city: String,
    state: String,
    zipcode: String,
    gender: String,
    status: String,
    experiences: Array,
    emailaddress: String,
    lat: Number,
    lng: Number,
    admin: Boolean
  },
  {
    collection: 'users'
  }
);

module.exports = mongoose.model('User', User);
