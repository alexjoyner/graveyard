import axios from 'axios';
import {ROOT_URL} from '../_startup/_config';
const POST_CHECK_IN = 'POST_CHECK_IN';
const HIDE_NOTIFICATIONS = 'HIDE_NOTIFICATIONS';

const postCheckIn = (clientData) => {
	const request = axios.post(`${ROOT_URL}/new/client`, clientData);
	return {
		type: POST_CHECK_IN,
		data: request
	}
};

const hideNotif = () => {
	return {
		type: HIDE_NOTIFICATIONS
	}
};

export {postCheckIn, POST_CHECK_IN, hideNotif, HIDE_NOTIFICATIONS};
