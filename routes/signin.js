var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log(req.body);
  console.log(req.body.email, req.body.password);
  res.json({});
});

module.exports = router;
