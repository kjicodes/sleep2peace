const Sleep = require('../models/sleep');

module.exports = {
  index,
  show,
  new: newSleep,
  create,
  delete: deleteSleep
};

function index(req, res) {
  Sleep.find({}, function(err, sleeps) {
    res.render('sleeps/index', { title: 'My Sleep Cycles', sleeps });
  });
};


function show(req, res) {
  Sleep.findById(req.params.id, function(err, sleep) {
    res.render('sleeps/show', { title: 'Sleep Cycle Details', sleep })
  })
};

function newSleep(req, res) {
  res.render('sleeps/new', { title: 'Add Sleep Cycle' });
};

function create(req, res) {
  req.body.wokeUp = !!req.body.wokeUp;
  req.body.ateFood = !!req.body.ateFood;
  const sleep = new Sleep(req.body);
  sleep.save(function(err) {
    if (err) return res.redirect('/sleeps/new');
    res.redirect('/sleeps');
  });
};

async function deleteSleep(req, res) {
  await Sleep.findByIdAndRemove(req.params.id);
  res.redirect('/sleeps');
};

