'use strict';
// Dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var supportSchema = new Schema({
    issue_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    point_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    ownerId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    ownerUsername: {
        type: String,
        required: true
    },
    evidence: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: false
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
    tag: {
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
    }
},{
    timestamps: true
});

module.exports = mongoose.model('supports', supportSchema);