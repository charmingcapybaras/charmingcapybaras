const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../../database/index');
const axios = require('axios');
const Agenda = require('../../database/models/agenda');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var User = require('./../../database/models/user');

// Get User by id
router.get(
  '/user/:id',
  (req, res, next) => {
    console.log('userID id', req.params.id);
    User.findById(req.params.id, function(err, user) {
      res.send(user);
    });
  },

  (req, res) => {
    res.status(201).send('specific user endpoint');
  }
);

router.get('/user', (req, res, next) => {
  User.find(function(err, itms) {
    if (err) {
      console.log(err);
    } else {
      res.json(itms);
    }
  });
});

module.exports = router;
