const Check = require('../models/check');
const Sleep = require('../models/sleep');

module.exports = {
    new: newCheck,
    create
};


function newCheck(req, res) {
    Check.find({}, function(err, checks) {
        res.render('checks/new', { title: 'Yay Wellness Check!', checks })
    })
};

function create(req, res) {
    Check.create(req.body, function(err, check) {
        res.redirect('/checks/new')
    })
};