const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
  res.send('hello from express');
});

module.exports = router;