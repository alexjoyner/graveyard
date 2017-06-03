'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var success = exports.success = function success(message) {
	return {
		notifInfo: {
			notifId: 1,
			header: 'Success',
			message: message,
			status: 'success'
		}
	};
};
var standardError = function standardError(message) {
	return {
		status: 200,
		message: {
			notifInfo: {
				notifId: 1,
				header: 'Error',
				message: message,
				status: 'error'
			}
		}
	};
};
var ALREADY_CHECKED_OUT = exports.ALREADY_CHECKED_OUT = standardError('Job already checked out');
var JOB_EXISTS = exports.JOB_EXISTS = standardError('Job already exists');
var JOB_DOESNT_EXIST = exports.JOB_DOESNT_EXIST = standardError('Job doesn\'t exist');
var NO_CLIENT_NAME = exports.NO_CLIENT_NAME = standardError('No client name passed');
var NO_ID_PASSED = exports.NO_ID_PASSED = standardError('No ID Passed');
var NO_TECH_SOLUTION = exports.NO_TECH_SOLUTION = standardError('No technical solution');
var NO_TECH_NAME = exports.NO_TECH_NAME = standardError('No tech name');
var NO_DESC = exports.NO_DESC = standardError('No description passed');
var COULDNT_UPDATE = exports.COULDNT_UPDATE = standardError('Failed to update: Try Again :)');