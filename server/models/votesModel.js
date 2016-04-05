'use strict';
// Dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Main schema
// ----------------------------
var votesSchema = new Schema({
    itemId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    itemType: {
        type: Number, // 1) issue, 2) point, 3) support
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    voteType: {
        type: Number, // 1) upvote, 2) downvote
        required: true
    }
});

module.exports = ('votes', votesSchema);