var express = require('express');
var path = require('path');
const router = express.Router();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var async = require('async');

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) return done(err);
      if (!user) return done(null, false, { message: 'Incorrect username.' });
      user.comparePassword(password, function(err, isMatch) {
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Incorrect password.' });
        }
      });
    });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    console.log('user', user);
    done(err, user);
  });
});

var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

userSchema.pre('save', function(next) {
  var user = this;
  var SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

var User = mongoose.model('User', userSchema);

mongoose.connect(process.env.MONGOOSE);

var app = express();

// Middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded());
router.use(cookieParser());
router.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { firdayHero: true }
  })
);

router.use(passport.initialize());
router.use(passport.session());
router.use(express.static(path.join(__dirname, 'public')));

// Routes
router.get('/', function(req, res) {
  console.log(req.isAuthenticated());
  console.log('Cookies: ', req.cookies);
  console.log('sessionID: ', req.sessionID);

  if (req.user) {
    console.log('user', user);
  }

  res.render('index', {
    title: 'Express',
    user: req.user
  });
});

router.get('/signup', function(req, res) {
  res.render('signup', {
    user: req.user
  });
});

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
      return res.redirect('/login');
    }
    req.logIn(user, function(err) {
      if (err) return next(err);
      return res.redirect('/');
    });
  })(req, res, next);
});

router.get('/login', function(req, res) {
  res.render('login', {
    user: req.user
  });
});
module.exports = router;
