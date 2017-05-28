"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.newClient = undefined;

var _utils = require("../../../utils");

function newClient(req, res, next) {
	var clientInfo = req.body;
	/*Sanitize*/
	if (!clientInfo.clientName || clientInfo.clientName === "") {
		return next(_utils.NO_CLIENT_NAME);
	}
	if (!clientInfo.problemDesc || clientInfo.problemDesc === "") {
		return next(_utils.NO_DESC);
	}
	var client = new _utils.Client(clientInfo);
	client.saveClient(function (err) {
		if (err) return next(err);
		res.status(201).send({
			notifInfo: {
				notifId: 1,
				header: 'Success!',
				message: 'Client created',
				status: 'success'
			}
		}).end();
	});
}

exports.newClient = newClient;