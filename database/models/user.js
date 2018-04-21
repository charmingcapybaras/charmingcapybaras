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
    zipCode: String,
    gender: String,
    status: String,
    experiences: Array,
    emailaddress: String,
    password: String,
    price_level: Number,
    rating: Number,
    lat: Number,
    lng: Number,
    agenda: Array,
    admin: Boolean
  },
  {
    collection: 'users'
  }
);

module.exports = mongoose.model('User', User);
