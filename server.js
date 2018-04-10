const express = require('express');
var app = express();

app.use(express.static(__dirname + '/public/'));

app.listen(2525, () => {
  console.log('Server is up and running on port 2525 whoohoo!');
});
