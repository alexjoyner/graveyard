const standardError = 200;
/*Handle errors on the client side*/
const CLIENT_EXISTS = {
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
const ALREADY_CHECKED_OUT = {
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
const CLIENT_DOESNT_EXIST = {
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
const NO_CLIENT_NAME = {
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

const NO_DESC = {
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


export {
	CLIENT_EXISTS,
	ALREADY_CHECKED_OUT,
	CLIENT_DOESNT_EXIST,
	NO_CLIENT_NAME,
	NO_DESC
};


