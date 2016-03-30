'use strict';
// Dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Supports = require('./supportModel');

var pointsSchema = new Schema({
    issue_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    problem: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
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
    }
});
pointsSchema.pre('remove', function(next) {
    // 'this' is the client being removed. Provide callbacks here if you want
    // to be notified of the calls' result.
    console.log('CALLING REMOVE');
    Supports.remove({point_id: this._id}).exec();
    next();
});
module.exports = mongoose.model('points', pointsSchema);