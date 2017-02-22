var express = require('express');
var router = express.Router();
var json = require('../tweets.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
    res.json(json);
});

module.exports = router;
