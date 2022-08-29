const Sleep = require('../models/sleep');

module.exports = {
    new: newSleep,
    create
}

function newSleep(req, res) {
    res.render('sleeps/new')
};

function create(req, res) {
    
}