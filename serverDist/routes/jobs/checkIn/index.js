"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.checkIn = checkIn;

var _utils = require("../../../utils");

function checkIn(req, res, next) {
	var clientInfo = req.body;
	/*Sanitize*/
	if (!clientInfo.clientName || clientInfo.clientName === "") {
		return next(_utils.NO_CLIENT_NAME);
	}
	if (!clientInfo.problemDesc || clientInfo.problemDesc === "") {
		return next(_utils.NO_DESC);
	}
	var client = new _utils.Job(clientInfo);
	client.checkIn(function (err) {
		if (err) return next(err);
		res.status(200).send((0, _utils.success)('Job created'));
	});
}