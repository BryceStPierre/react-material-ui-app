var express = require('express');
var router = express.Router();

module.exports = function (passport) {
  router.post('/', passport.authenticate('local'), function(req, res) {
    console.log(req.user);
    console.log('Authenticated successfully.');
    res.json({});
  });
  return router;
};
