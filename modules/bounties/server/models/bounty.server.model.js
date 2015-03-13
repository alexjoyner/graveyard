'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Bounty Schema
 */
var BountySchema = new Schema({
	firstName: {
		type: String,
		default: '',
		trim: true
	},
    surname: {
		type: String,
		default: '',
		trim: true
	},
    suburb: {
		type: String,
		default: '',
		trim: true
	},
    country: {
		type: String,
		default: '',
		trim: true
	},
   industry: {
		type: String,
		default: '',
		trim: true
	},
    email: {
		type: String,
		default: '',
		trim: true
	},
    phone: {
		type: String,
		default: '',
		trim: true
	},
    referred: {
		type: Boolean,
	},
    channel: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Bounty', BountySchema);