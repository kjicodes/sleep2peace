const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    thoughts: {
        type: String,
        required: true
    }
});

const sleepSchema = new Schema ({
    date: {
        type: String,
        required: true,
        default: Date.now
    }, 
    hoursSlept: Number,
    wokeUp: Boolean,
    ateFood: Boolean,
    energyLevels: String,
    comments: [commentsSchema]
});

module.exports = mongoose.model('Sleep', sleepSchema);