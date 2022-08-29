var express = require('express');
var router = express.Router();
const sleepsCtrl = require('../controllers/sleeps');

router.get('/new', sleepsCtrl.new);
router.post('/', sleepsCtrl.create);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
