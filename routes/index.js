var express = require('express');
var router = express.Router();
//var json = require('../tweets.json');
var request = require('request');
//var async = require("async");

//Usando el endpoint

router.get('/', function(req, res, next) {
  request(req.protocol + '://' + req.get('host') + req.originalUrl+'accessjson', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var json = JSON.parse(body);
    }
    else {
      return res.sendStatus(500);
    }
    //console.log(json);
    res.render('index', {tweets: json });
  });
});




module.exports = router;
