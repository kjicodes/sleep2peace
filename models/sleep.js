const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const sleepSchema = new Schema ({
    date: String, 
    hoursSlept: Number,
    energyLevel: String,
    wokeUp: Boolean,
    ateFood: Boolean
});

module.exports = mongoose.model('Sleep', sleepSchema);