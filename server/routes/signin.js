var express = require('express');
var router = express.Router();

var Users = require('../server/models/users');

router.post('/', function(req, res, next) {

  //Testing Users model.
  Users.retrieve(req.body.email, (res) => {
    console.log(res[0]);
  });

  console.log(req.body);
  console.log(req.body.email, req.body.password);
  res.json({});
});

module.exports = router;
