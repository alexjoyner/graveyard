'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.checkOut = undefined;

var _utils = require('../../../utils');

var checkOut = function checkOut(req, res, next) {
	var clientInfo = req.body;
	/*Sanitize*/
	if (!clientInfo.clientName || clientInfo.clientName === "") {
		return next(_utils.NO_CLIENT_NAME);
	}
	// if (!clientInfo.problemDesc || clientInfo.problemDesc === "") {
	// 	return next({
	// 		status: 400,
	// 		message: "No Problem description"
	// 	})
	// }
	var client = new _utils.Client(clientInfo);
	client.checkOut(function (err) {
		if (err) return next(err);
		res.status(200).send({
			notifInfo: {
				notifId: 1,
				header: 'Success',
				message: 'Client checked out',
				status: 'success'
			}
		}).end();
	});
};

exports.checkOut = checkOut;