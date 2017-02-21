var express = require('express');
var router = express.Router();
var json = require('../tweets.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {tweets: json });
});

module.exports = router;
