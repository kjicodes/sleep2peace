const Check = require('../models/check');
const Sleep = require('../models/sleep');

module.exports = {
    new: newCheck,
    create
};

function newCheck(req, res) {
    Sleep.findById(req.params.id, function(err, sleep) {
        res.render('checks/new', { title: 'Yay Wellness Check!', sleep });
    });
};

function create(req, res) {
    Check.create(req.body, function(err, check) {
        res.redirect('/checks/new');
    });
};