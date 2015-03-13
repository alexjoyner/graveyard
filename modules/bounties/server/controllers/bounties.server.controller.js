'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	path = require('path'),
	mongoose = require('mongoose'),
	Bounty = mongoose.model('Bounty'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a Bounty
 */
exports.create = function(req, res) {
	var bounty = new Bounty(req.body);
	bounty.user = req.user;

	bounty.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(bounty);
		}
	});
};

/**
 * Show the current Bounty
 */
exports.read = function(req, res) {
	res.jsonp(req.bounty);
};

/**
 * Update a Bounty
 */
exports.update = function(req, res) {
	var bounty = req.bounty ;

	bounty = _.extend(bounty , req.body);

	bounty.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(bounty);
		}
	});
};

/**
 * Delete an Bounty
 */
exports.delete = function(req, res) {
	var bounty = req.bounty ;

	bounty.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(bounty);
		}
	});
};

/**
 * List of Bounties
 */
exports.list = function(req, res) { Bounty.find().sort('-created').populate('user', 'displayName').exec(function(err, bounties) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(bounties);
		}
	});
};

/**
 * Bounty middleware
 */
exports.bountyByID = function(req, res, next, id){ Bounty.findById(id).populate('user', 'displayName').exec(function(err, bounty) {
		if (err) return next(err);
		if (! bounty) return next(new Error('Failed to load Bounty ' + id));
		req.bounty = bounty ;
		next();
	});
};