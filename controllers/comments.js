const Sleep = require('../models/sleep');

module.exports = {
  create
};

function create(req, res) {
  Sleep.findById(req.params.id, function(err, sleep) {
    sleep.comments.push(req.body)
    sleep.save(function(err) {
      res.redirect(`/sleeps/${sleep._id}`)
    });
  });
};