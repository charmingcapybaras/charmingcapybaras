// user.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Users
let User = new Schema(
  {
    firstName: STRING,
    lastName: STRING,
    address: STRING,
    telephone: STRING,
    city: STRING,
    state: STRING,
    zipcode: STRING,
    gender: STRING,
    status: INTEGER,
    emailaddress: STRING,
    admin: Boolean,
    created_at: Date
  },
  {
    collection: 'users'
  }
);

module.exports = mongoose.model('User', User);
