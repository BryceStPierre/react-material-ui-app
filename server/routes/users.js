var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    { id: 0, test: 'Hello' },
    { id: 1, test: 'World' }
  ]);
});

module.exports = router;
