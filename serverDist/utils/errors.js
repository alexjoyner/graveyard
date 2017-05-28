'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var standardError = 200;
/*Handle errors on the client side*/
var CLIENT_EXISTS = {
	status: standardError,
	message: {
		notifInfo: {
			notifId: 1,
			header: 'Error',
			message: 'Client already exists',
			status: 'error'
		}
	}
};
var ALREADY_CHECKED_OUT = {
	status: standardError,
	message: {
		notifInfo: {
			notifId: 1,
			header: 'Error',
			message: 'Already checked out',
			status: 'error'
		}
	}
};
var CLIENT_DOESNT_EXIST = {
	status: standardError,
	message: {
		notifInfo: {
			notifId: 1,
			header: 'Error',
			message: 'Client doesn\'t exist',
			status: 'error'
		}
	}
};
var NO_CLIENT_NAME = {
	status: standardError,
	message: {
		notifInfo: {
			notifId: 1,
			header: 'Error',
			message: 'No client name passed',
			status: 'error'
		}
	}
};

var NO_DESC = {
	status: standardError,
	message: {
		notifInfo: {
			notifId: 1,
			header: 'Error',
			message: 'No description passed',
			status: 'error'
		}
	}
};

exports.CLIENT_EXISTS = CLIENT_EXISTS;
exports.ALREADY_CHECKED_OUT = ALREADY_CHECKED_OUT;
exports.CLIENT_DOESNT_EXIST = CLIENT_DOESNT_EXIST;
exports.NO_CLIENT_NAME = NO_CLIENT_NAME;
exports.NO_DESC = NO_DESC;