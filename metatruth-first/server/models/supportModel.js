'use strict';
// Dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var supportSchema = new Schema({
    point_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    evidence: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: 'proove'
    },
    source: {
        type: String,
        required: true
    },
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

module.exports = mongoose.model('supports', supportSchema);