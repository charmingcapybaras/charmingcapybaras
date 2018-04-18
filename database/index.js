const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/capybaras');

console.log('Connected to DB: USE capybaras database');

let userSchema = mongoose.Schema({
  userID: { type: Number, index: true, unique: true },
  fName: String,
  lName: String,
  age: { type: Number, min: 18 },
  zipcode: Number,
  email: String,
  telephone: String,
  gender: String,
  status: String
});

let User = mongoose.model('User', userSchema);

//dummy data
// let myUser = new User({
//   fName: 'Kuyik',
//   lName: 'Akpan',
//   age: 32,
//   zipcode: 94587,
//   email: 'kjakpan@hackreactor.com',
//   telephone: '5105555555',
//   gender: 'M',
//   status: 'Ready to mingle'
// });
// myUser.save();

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
