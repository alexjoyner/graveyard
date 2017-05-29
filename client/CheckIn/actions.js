import axios from 'axios';
import {ROOT_URL} from '../_startup/_config';
export const POST_CHECK_IN = 'POST_CHECK_IN';
export const postCheckIn = (clientData) => {
	const request = axios.post(`${ROOT_URL}/checkIn`, clientData);
	return {
		type: POST_CHECK_IN,
		data: request
	}
};
