const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checkSchema = new Schema({
    date: {
        type: String,
        required: true,
        default: Date.now
    },
    activityCheck: String,
    mealCheck: Boolean,
    waterCheck: String,
    feeling: String
});

module.exports = mongoose.model('Check', checkSchema);