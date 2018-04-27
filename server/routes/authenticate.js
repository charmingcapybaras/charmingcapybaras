const path = require('path');
const express = require('express');
const router = express.Router();
const util = require('../../helpers/user-status');
const axios = require('axios');
const User = require('../../database/models/user');
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');

router.post('/login', (req, res) => {
  console.log('post to /authenticate/login');

  var password = req.body.password;
  var emailaddress = req.body.emailaddress;

  // Works

  User.findOne({ emailaddress: emailaddress }).then(found => {
    console.log('foundOne ', found);
    if (!found) {
      console.log('your user is not in the database');
      res.redirect(301, '/user');
    } else {
      console.log('found user now checking password');

      bcrypt.compare(password, found.get('password'), function(err, correct) {
        if (correct) {
          // set up the session
          util.newSession(req, res, found);
        } else {
          console.log('Your password is ic\ncorrect');
          res.redirect(301, '/');
        }
      });
    }
  });
});

router.post('/signup', (req, res) => {
  var emailaddress = req.body.emailaddress;
  var password = req.body.password;

  console.log(emailaddress, password);

  User.findOne({ emailaddress: emailaddress }).then(function(found) {
    console.log('found in signup ');
    if (!found) {
      bcrypt.hash(password, null, null, function(err, hash) {
        var user = new User();

        user
          .save({
            emailaddress: emailaddress, // 'sampleUser'
            password: hash // 'password'
          })
          .then(function(newUser) {
            //TODO: create session helper function
            // console.log('new user');
            console.log('found ', newUser);
            // util.newSession(req, res, found);
            // res.status(200).send();
            next();
          })
          .catch(err => {
            console.log('error in saving new user ', err);
          });
      });
      //alert('User already exists');
    } else {
      //if not found
      //TODO: create
      res.redirect(301, '/login');
    }
  });
});

router.get('/logout', function(req, res) {
  console.log('===== sesion destroyed ======');
  req.session.destroy(function() {
    res.redirect('/');
  });
});

module.exports = router;
