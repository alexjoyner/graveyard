'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.searchUnfinished = undefined;

var _utils = require('../../../utils');

var searchUnfinished = exports.searchUnfinished = function searchUnfinished(req, res, next) {
	_utils.Job.searchUnfinished(req.params.searchTerm, function (err, jobs) {
		if (err) return next(err);
		res.status(200).send(jobs);
	});
};