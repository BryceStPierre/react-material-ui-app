var express = require('express');
var router = express.Router();

var Categories = require('../models/categories');

router.get('/', function (req, res) {
  Categories.retrieveAll(function (categories) {
    res.json(categories);
  });
});

module.exports = router;