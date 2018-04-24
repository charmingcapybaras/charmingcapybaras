const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');
var session = require('express-session');
var util = require('./../helpers/user-status');
// const worker = require('../workers/agenda-helper'); // chron job

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

// include routes
var routes = require('./routes/index');
app.use('/', routes);

// serve static files from ../client/dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// router.get('/agenda', util.checkUser, function(req, res) {
//   console.log('session', request.session, 'sessionId', request.sessionID);
// });

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

var authenticate = require('./routes/authenticate');
app.use('/authenticate', authenticate);

app.listen(3000, () => {
  console.log('Listening to port 3000...');
});
