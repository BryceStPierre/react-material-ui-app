var express = require('express');
var router = express.Router();

var Users = require('../models/users');

module.exports = function (passport) {
  router.post('/', function (req, res, next) {
    Users.create(req.body, function (user) {
      console.log(`New user ${user ? '' : 'NOT '}registered by email.`);

      if (!user) return res.json({ emailError: true });

      req.login({
        id: user.id,
        email: req.body.email,
        password: req.body.password,
        displayName: user.display_name
      }, function (err) {
        if (err) return next(err);
        return res.json({ user });
      });
    });
  });

  return router;
};