var express = require('express');
var router = express.Router();
const sleepsCtrl = require('../controllers/sleeps');

router.get('/', sleepsCtrl.index);
router.get('/new', sleepsCtrl.new);
router.get('/:id', sleepsCtrl.show);
router.post('/', sleepsCtrl.create);

module.exports = router;
