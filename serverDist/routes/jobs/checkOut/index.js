'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.checkOut = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../../utils');

var checkOut = function checkOut(req, res, next) {
	var id = req.params.id;

	var solutionInfo = _extends({}, req.body);
	if (!solutionInfo.techName || solutionInfo.techName === '') {
		return next(_utils.NO_TECH_NAME);
	}
	if (!solutionInfo.techSolution || solutionInfo.techSolution === '') {
		return next(_utils.NO_TECH_SOLUTION);
	}
	_utils.Job.checkOut(_extends({
		id: id }, solutionInfo), function (err) {
		if (err) return next(err);
		res.status(200).send((0, _utils.success)('Job checked out'));
	});
};

exports.checkOut = checkOut;