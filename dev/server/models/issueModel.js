'use strict';
// Dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var Points = require('./pointModel');
var Supports = require('./supportModel');
// Issue Main Schema
// ----------------------
var issuesSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    ownerUsername: {
        type: String,
        required: true
    },
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
},{
    timestamps: true
});
issuesSchema.pre('remove', function(next) {
    // 'this' is the client being removed. Provide callbacks here if you want
    // to be notified of the calls' result.
    Points.remove({issue_id: this._id}).exec();
    Supports.remove({issue_id: this._id}).exec();
    next();
});
module.exports = mongoose.model('issues', issuesSchema);