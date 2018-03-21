var express = require('express');
var router = express.Router();

module.exports = function (passport) {
  router.get('/', function (req, res) {
    res.json(req.user ? req.user : null);
  });

  router.post('/', passport.authenticate('local'), function(req, res) {
    console.log('Authenticated successfully.');
    res.json(req.user);
  });
  
  router.delete('/', function (req, res) {
    req.logout();
    res.json(true);
  });

  return router;
};
