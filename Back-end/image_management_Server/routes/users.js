var express = require('express');
var router = express.Router();

/* this is a demo page */

// GET /users
router.get('/', function(req, res, next) {
  res.send('API endpoint: GET /users');
});

// POST /users
router.post('/', function(req, res, next) {
  res.send('API endpoint: POST /users');
});

module.exports = router;
