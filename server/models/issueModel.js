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
    ups: Number,
    downs: Number
});

var proSchema = new Schema({
    problem: String,
    ups: Number,
    downs: Number,
    tags: {
        meta: Number,
        credible: Number,
        media: Number,
        opinion: Number
    },
    support: [supportSchema]
});

var conSchema = new Schema({
    problem: String,
    ups: Number,
    downs: Number,
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
    pros: [conSchema],
    cons: [proSchema]
});

module.exports = mongoose.model('issues', issuesSchema);