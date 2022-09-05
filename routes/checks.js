const express = require('express');
const router = express.Router();
const checksCtrl = require('../controllers/checks');

router.get('/new/:id', checksCtrl.new);
router.post('/create/:id', checksCtrl.create);

module.exports = router;


