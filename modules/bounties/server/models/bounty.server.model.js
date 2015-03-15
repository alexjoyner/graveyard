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
	title: {
		type: String,
		default: '',
		trim: true
	},
    hours: {
		type: Number,
		default: '',
		trim: true
	},
    typeOfJob: {
		type: String,
		default: '',
		trim: true
	},
    workerType: {
		type: String,
		select: true,
		default: '',
		trim: true
	},
   	workerNumber: {
		type: Number,
		select: true,
		default: '',
		trim: true
	},
    description: {
		type: String,
		default: '',
		trim: true
	},
	total: {
		type: Number,
		default: '',
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Bounty', BountySchema);