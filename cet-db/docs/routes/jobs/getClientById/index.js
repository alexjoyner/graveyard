'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.getClientById = undefined;

var _job = require('../../../utils/job');

var getClientById = function getClientById(req, res, next) {
		_job.Job.getClient(req.params.id, function (err, result) {
				if (err) return next(err);
				res.status(200).send(result);
		});
};

exports.getClientById = getClientById;