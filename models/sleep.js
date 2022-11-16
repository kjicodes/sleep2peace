const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  thoughts: { type: String }
});

const sleepSchema = new Schema({
  date: {
    type: String,
    required: true,
    default: Date.now
  }, 
  hoursSlept: Number,
  wokeUp: Boolean,
  ateFood: Boolean,
  energyLevels: String,
  comments: [commentSchema]
});

module.exports = mongoose.model('Sleep', sleepSchema);