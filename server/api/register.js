var express = require('express');
var router = express.Router();

var Users = require('../models/users');

module.exports = function (passport) {
  router.post('/', function (req, res, next) {
    Users.create(req.body, function (success) {
      console.log(`New user ${success ? '' : 'NOT'} registered by email.`);

      if (!success) return res.json({ existsError: true });
        
      // console.log(req.body);

      // const user = {
      //   email: req.body.email,
      //   password: req.body.password
      // };

      // req.login(user, function (err) {
      //   if (err) return next(err);
      //   return res.json(user);
      // });
    });
  });

  return router;
};