import axios from 'axios';
import {ROOT_URL} from '../_startup/_config';
const CHECKOUT_CLIENT = 'CHECKOUT_CLIENT';
const HIDE_NOTIFICATIONS = 'HIDE_NOTIFICATIONS';

const checkOutClient = (clientData) => {
	const request = axios.post(`${ROOT_URL}/checkout`, clientData);
	return {
		type: CHECKOUT_CLIENT,
		data: request
	}
};
const hideNotif = () => {
	return {
		type: HIDE_NOTIFICATIONS
	}
};

export {CHECKOUT_CLIENT, checkOutClient, hideNotif, HIDE_NOTIFICATIONS};
