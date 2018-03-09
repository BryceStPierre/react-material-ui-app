var express = require('express');
var router = express.Router();

router.post('/api/login', function(req, res, next) {
  console.log(req.body.username, req.body.password);  
});

module.exports = router;
