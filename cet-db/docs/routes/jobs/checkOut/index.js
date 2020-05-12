'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.checkOut = undefined;

var _utils = require('../../../utils');

var checkOut = function checkOut(req, res, next) {
	var id = req.params.id;
	var techSolution = req.body.techSolution;

	if (!techSolution || techSolution === '') {
		return next(_utils.NO_TECH_SOLUTION);
	}

	_utils.Job.checkOut({
		id: id, techSolution: techSolution
	}, function (err) {
		if (err) return next(err);
		res.status(200).send((0, _utils.success)('Job checked out'));
	});
};

exports.checkOut = checkOut;