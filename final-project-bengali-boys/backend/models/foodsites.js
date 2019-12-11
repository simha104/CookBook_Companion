const mongoose = require('mongoose');

const foodsite_schema = new mongoose.Schema({

    Name: {
        type: String,
        required: true
    },

    Difficulty: {
        type: String,
        required: true
    },

    Ethnicity: {
        type: String,
        required: true
    },

    Time: {
        type: Number,
        required: true
    },

    Image: {
        type: String,
        required: true
    },

    Site: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('food', foodsite_schema)