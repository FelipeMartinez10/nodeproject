var express = require('express');
var router = express.Router();
var json = {};//require('../tweets.json');


//Requerimiento para mongo.
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// Coneccion URL
//var url = 'mongodb://localhost:27017/nodetweets';
var url = 'mongodb://admin:admin@ds145299.mlab.com:45299/nodetweets';

/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    findDocuments(db, function() {
      res.setHeader('Content-Type', 'application/json');
      res.json(json);
      db.close();
    });
  });
});



var findDocuments = function(db, callback) {
  // Get the documents tweets
  var collection = db.collection('tweets');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found tweets collection");
    json = docs;
    //console.log(json);
    callback(docs);
  });
}
module.exports = router;
