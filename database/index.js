// const dbUser = process.env.DB_USER;
// const dbPwd = process.env.DB_PASS;
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fridayhero');
// mongoose.connect(
//   'mongodb://fontmonger:Pr3tty1nPinK@ds121599.mlab.com:21599/rpt05'
// );

mongoose.connect('mongodb://localhost/fridayhero');
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
