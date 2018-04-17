const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');

// call express
const app = express();

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// include routes
var routes = require('./routes/index');
app.use('/', routes);

// serve static files from ../client/dist
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(3000, () => {
  console.log('Listening to port 3000...');
});
