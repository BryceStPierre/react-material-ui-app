var express = require('express');
var router = express.Router();

var Users = require('../server/models/users');

//var pg = require('../server/database');

router.post('/', function(req, res, next) {

  //Testing Users model.
  Users.findByEmail(req.body.email);

  console.log(req.body);
  console.log(req.body.email, req.body.password);
  res.json({});
});

module.exports = router;
