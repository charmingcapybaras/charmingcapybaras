const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../../database/index');

router.get('/', (req, res, next) =>{
  res.status(201).send('hello from express');
});

router.get('/api', (req, res, next) => {
  res.status(201).send('api endpoint')
})

router.get('/api/user', (req, res, next) => {
  res.status(201).send('user endpoint')
})

router.get('/api/user/:id', (req, res, next) => {

  db.userById(req.params.id);
  //res.status(201).send('specific user endpoint')
  next()
}, (req, res) => {res.status(201).send('specific user endpoint')} )

module.exports = router;