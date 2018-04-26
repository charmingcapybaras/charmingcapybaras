const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');
var session = require('express-session');
var util = require('./../helpers/user-status');

var cookieParser = require('cookie-parser');
var passport = require('passport');
require('dotenv').config();
const worker = require('../workers/agenda-helper'); // chron job

// call express
const app = express();
// session
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files from ../client/dist
app.use(express.static(path.join(__dirname, '../client/dist')));

var api = require('./routes/index');
app.use('/agendas', api);

var users = require('./routes/user');
app.use('/api', users);

var community = require('./routes/loggedin');
app.use('/community', community);

app.get('*', util.checkUser, function(request, response) {
  response.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(3000, () => {
  console.log('Listening to port 3000...');
});
