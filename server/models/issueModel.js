'use strict';
// Dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var supportSchema = new Schema({
    evidence: String,
    sources: [String],
    tags: {
        metaData: Boolean,
        credible: Boolean,
        media: Boolean,
        opinion: Boolean
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

var pointSchema = new Schema({
    problem: String,
    ups: {
        type: Number,
        default: 0
    },
    downs: {
        type: Number,
        default: 0
    },
    tags: {
        meta: Number,
        credible: Number,
        media: Number,
        opinion: Number
    },
    support: [supportSchema]
});

// Issue Main Schema
// ----------------------
var issuesSchema = new Schema({
    mainQuestion: String,
    questionDetail: String,
    ups: {
        type: Number,
        default: 0
    },
    downs: {
        type: Number,
        default: 0
    },
    pros: [pointSchema],
    cons: [pointSchema]
});

module.exports = mongoose.model('issues', issuesSchema);