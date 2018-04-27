const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOOSE);
// const User = require('./models/user');
const Agenda = require('./models/agenda');

console.log('Connected to DB ..');

//return user by userId
let userById = id => {
  return User.findOne({ userID: id }, (err, obj) => {
    console.log(obj);
  });
};

//return all users (modify later)
let allUsers = () => {
  return User.find();
};

module.exports = { userById, allUsers };
