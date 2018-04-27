var express = require('express');

var cookieParser = require('cookie-parser');
var path = require('path');
var logger = require('morgan');
const router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var async = require('async');

var User = require('./../../database/models/user');

// mongoose.connect('mongodb://localhost/fridayhero');

router.use(cookieParser());
router.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

router.post('/signup', function(req, res) {
  var user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  user.save(function(err) {
    req.logIn(user, function(err) {
      res.redirect('/');
    });
  });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);
    if (!user) {
      console.log('login fail go to login');
      // return res.redirect('/login');
      var redir = { redirect: '/login' };
      return res.json(redir);
    }
    req.logIn(user, function(err) {
      if (err) return next(err);
      // console.log('login success go to agenda!');
      var redir = { redirect: '/agenda' };
      return res.json(redir);
      // return res.redirect(301, '../agenda');
    });
  })(req, res, next);
});

// router.get('/login', function(req, res) {
//   res.render('login', {
//     user: req.user
//   });
// });

module.exports = router;
