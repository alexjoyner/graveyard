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
		type: Object,
		default: '',
		trim: true
	},
    typeOfJob: {
		type: Object,
		default: '',
		trim: true
	},
   	workerNumber: {
		type: Object,
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