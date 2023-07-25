var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('você é legal');
});

router.get('/ifc', function(req, res, next) {
  res.send('bem vindo ao ifc');
});

router.get('/cool/beach', function(req, res, next) {
  res.send('adoro praia');
});

module.exports = router;
