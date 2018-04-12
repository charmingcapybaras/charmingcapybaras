const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// call express
const app = express();

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files from ../client/dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// include routes
var routes = require('./routes/index');
app.use('/', routes);

app.listen(3000, () => {
  console.log('Listening to port 3000...');
});