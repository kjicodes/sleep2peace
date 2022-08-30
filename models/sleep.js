const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    thoughts: String
})

const sleepSchema = new Schema ({
    date: {
        type: String,
        default: Date.now
    }, 
    hoursSlept: Number,
    wokeUp: Boolean,
    ateFood: Boolean,
    energyLevels: String,
    comments: [commentsSchema]
});

module.exports = mongoose.model('Sleep', sleepSchema);