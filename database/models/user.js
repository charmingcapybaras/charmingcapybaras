// user.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var uniqueValidator = require('mongoose-unique-validator');

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
    emailaddress: { type: String, unique: true },
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

// User.plugin(uniqueValidator);

module.exports = mongoose.model('User', User);
