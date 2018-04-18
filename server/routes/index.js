const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../../database/index');

// router.get('/', (req, res, next) => {
//   res.status(201).send('hello from express');
// });

// router.get('/api', (req, res, next) => {
//   res.status(201).send('api endpoint');
// });

router.get('/api/user', (req, res, next) => {
  res.status(201).send('user endpoint');
});

router.get(
  '/api/user/:id',
  (req, res, next) => {
    db.userById(req.params.id);
    //res.status(201).send('specific user endpoint')
    next();
  },
  (req, res) => {
    res.status(201).send('specific user endpoint');
  }
);

router.post('/api/user', (req, res) => {
  db.collection('user').save(req.body, (err, results) => {
    console.log(req.body);
    req.status('200').send();
    // if (err) {
    //   console.log('could not add user to the datbase');
    //   res.status('404').send();
    // } else {
    //   res.status('201').send();
    // }
  });
});

module.exports = router;
