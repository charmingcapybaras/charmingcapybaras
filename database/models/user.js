// user.js
var mongoose = require('mongoose');
// var userSchema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var userSchema = new mongoose.Schema({
  // username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

// userSchema.pre('save', function(next) {
//   var user = this;
//   var SALT_FACTOR = 5;

//   if (!user.isModified('password')) return next();

//   bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
//     if (err) return next(err);

//     bcrypt.hash(user.password, salt, null, function(err, hash) {
//       if (err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };
// var uniqueValidator = require('mongoose-unique-validator');

// Define collection and schema for Users
// let User = new Schema(
//   {
//     firstName: String,
//     lastName: String,
//     address: String,
//     telephone: String,
//     city: String,
//     state: String,
//     zipCode: String,
//     gender: String,
//     status: String,
//     experiences: Array,
//     emailaddress: { type: String, unique: true },
//     password: String,
//     price_level: Number,
//     rating: Number,
//     lat: Number,
//     lng: Number,
//     agenda: Array,
//     admin: Boolean
//   },
//   {
//     collection: 'users'
//   }
// );

// User.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
