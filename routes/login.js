var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
  console.log(req.body);
  console.log(req.body.username, req.body.password);
  res.json([
    { id: 0, test: 'Hello' },
    { id: 1, test: 'World' }
  ]);
});

module.exports = router;
