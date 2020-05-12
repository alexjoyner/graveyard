export const success = message => {
	return {
		notifInfo: {
			notifId: 1,
			header: 'Success',
			message: message,
			status: 'success'
		}
	}
};
const standardError = (message) => {
	return 	{
		status: 200,
		message: {
			notifInfo: {
				notifId: 1,
				header: 'Error',
				message: message,
				status: 'error'
			}
		}
	}
};
export const ALREADY_CHECKED_OUT = standardError('Job already checked out');
export const JOB_EXISTS = standardError('Job already exists');
export const JOB_DOESNT_EXIST = standardError('Job doesn\'t exist');
export const NO_CLIENT_NAME = standardError('No client name passed');
export const NO_ID_PASSED = standardError('No ID Passed');
export const NO_TECH_SOLUTION = standardError('No technical solution');
export const NO_TECH_NAME = standardError('No tech name');
export const NO_DESC = standardError('No description passed');
export const COULDNT_UPDATE = standardError('Failed to update: Try Again :)');


