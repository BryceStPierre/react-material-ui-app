var express = require('express');
var router = express.Router();

var Skeams = require('../models/Skeams');

module.exports = function (passport) {
  router.post('/', function (req, res) {
    Skeams.create(req.body, function (data) {
      res.json(data);
    });
  });

  return router;
};