var express = require('express');
var router = express.Router();
const sleepsCtrl = require('../controllers/sleeps');

router.get('/', sleepsCtrl.index);
router.get('/new', sleepsCtrl.new);
router.post('/', sleepsCtrl.create);
router.get('/:id', sleepsCtrl.show);
router.delete('/:id', sleepsCtrl.delete);

module.exports = router;

