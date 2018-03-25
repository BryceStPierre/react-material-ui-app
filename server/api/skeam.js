var express = require('express');
var router = express.Router();

var Skeams = require('../models/Skeams');

module.exports = function (passport) {
  router.post('/', function (req, res) {
    Skeams.create(req.body, function (id) {
      res.json(id);
    });
  });

  router.get('/', function (req, res) {
    Skeams.retrieveById(req.body, function (skeam) {
      res.json(skeam);
    })
  });
  
  return router;
};