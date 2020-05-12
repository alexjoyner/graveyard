'use strict';
// Dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var pointsSchema = new Schema({
    issue_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    problem: {
        type: String,
        required: true
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

module.exports = mongoose.model('points', pointsSchema);