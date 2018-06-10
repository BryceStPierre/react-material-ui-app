var express = require('express');
var router = express.Router();

var Skeams = require('../models/skeams');

module.exports = function (passport) {
  router.post('/', function (req, res) {
    Skeams.create(req.body, function (id) {
      res.json(id);
    });
  });

  router.get('/:id', function (req, res) {
    Skeams.retrieveById(req.params.id, function (skeam) {
      res.json(skeam);
    })
  });

  router.get('/search/:query', function (req, res) {
    if (!req.params.query) return;
    console.log(`Query: ${req.params.query}.`);
    Skeams.retrieveBySearch(req.params.query, function (results) {
      // console.log(results);
      res.json(results);
    });
  });
  
  return router;
};