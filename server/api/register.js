var express = require('express');
var router = express.Router();

module.exports = function (passport) {
  router.post('/', function (req, res, next) {
    // res.json(req.user);
    console.log(req.body);

    // req.login(user, function (err) {
    //   if (err) return next(err);
    //   console.log(req.user);
    //   return res.json(req.user);
    // });
  });

  return router;
};