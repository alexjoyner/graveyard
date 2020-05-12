'use strict';
// Dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var locSchema = {
    formatted_address: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    }
};
var whatSchema = new Schema({
    src: {
        type: String
    },
    desc: {
        type: String
    },
    quantity: {
        type: Number
    }
});
var bidSchema = new Schema({
    from: Schema.Types.ObjectId,
    partnerFirst: String,
    amount: Number,
    eta: String,
});
// Haul Main Schema
// ----------------------
var haulsSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    who: Schema.Types.ObjectId,
    type: {
        type: String,
        default: 'Haul',
        required: true
    },
    what: [whatSchema],
    where: {
        pickup: locSchema,
        dropOff: locSchema
    },
    obstacles: {
        stairs: {
            type: Boolean,
            required: true
        }
    },
    bids: [bidSchema],
    status: {
        tag: {
            type: String,
            default: 'Accepting Bids'
        },
        stage: {
            type: Number,
            default: 0
        }
    },
    bidAccepted: {
        _id: Schema.Types.ObjectId,
        from: Schema.Types.ObjectId,
        partnerFirst: String,
        amount: Number,
        eta: String
    }
});
haulsSchema.methods.hasExpired = function() {
    var now = new Date();
    console.log(this.createdAt);
    console.log(now);
    return (now - this.createdAt) > 420000;
};
//  type: 'Haul',
//  short_desc: '1 Leather Sofa',
//  desc: 'I need a pickup truck pronto',
//  date: '10/1/15',
//  images: true

module.exports = mongoose.model('hauls', haulsSchema);