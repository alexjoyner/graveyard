'use strict';
// Dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Issue Main Schema
// ----------------------
var issuesSchema = new Schema({
    mainQuestion: {
        type: String,
        required: true
    },
    questionDetail: {
        type: String
    },
    ups: {
        type: Number,
        default: 0
    },
    downs: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('issues', issuesSchema);