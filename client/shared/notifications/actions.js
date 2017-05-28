const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

const showNotif = (contents) => {
	const {notifId ,header, message, status} = contents;
	return {
		type: SHOW_NOTIFICATION,
		data: {notifId ,header, message, status}
	}
};
const hideNotif = () => {
	return {
		type: HIDE_NOTIFICATION
	}
};

export {
	hideNotif, HIDE_NOTIFICATION,
	showNotif, SHOW_NOTIFICATION
};
