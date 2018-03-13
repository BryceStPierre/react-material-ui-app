var express = require('express');
var router = express.Router();

module.exports = function (passport) {
  router.get('/', function (req, res) {
    console.log(req.user ? req.user : 'No user.');
    res.json(req.user ? req.user : null);
  });

  router.post('/', passport.authenticate('local'), function(req, res) {
    console.log('Authenticated successfully.');
    res.json(req.user);
  });

  return router;
};
