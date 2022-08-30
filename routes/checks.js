const express = require('express');
const router = express.Router();
const checksCtrl = require('../controllers/checks');

router.get('/checks/new', checksCtrl.new);
router.post('/checks', checksCtrl.create);

module.exports = router;


