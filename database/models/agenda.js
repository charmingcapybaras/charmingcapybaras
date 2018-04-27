// agenda.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Users
let Agenda = new Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    username: String,
    address: String,
    telephone: String,
    city: String,
    state: String,
    zip_code: String,
    gender: String,
    status: String,
    experiences: Array,
    price_level: Number,
    rating: Number,
    lat: Number,
    lng: Number,
    agenda: Array,
    admin: Boolean
  },
  {
    collection: 'agendas'
  }
);

// User.plugin(uniqueValidator);

module.exports = mongoose.model('Agenda', Agenda);
