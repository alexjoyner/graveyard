'use strict';
// Dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var subSupport = new Schema({
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

var mainPoints = new Schema({
    problem: String,
    ups: Number,
    downs: Number,
    tags: {
        meta: Number,
        credible: Number,
        media: Number,
        opinion: Number
    },
    results: {
        yes: Number,
        no: Number
    },
    showMore: Boolean,
    addSupport: Boolean,
    showPreview: Boolean,
    subSupport: [subSupport]
});

// Issue Main Schema
// ----------------------
var issuesSchema = new Schema({
    mainQuestion: String,
    questionDetail: String,
    pros: [mainPoints],
    cons: [mainPoints]
});

module.exports = mongoose.model('issues', issuesSchema);