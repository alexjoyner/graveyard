import axios from 'axios';
import {ROOT_URL} from '../_startup/_config';
const POST_CHECK_IN = 'POST_CHECK_IN';

const postCheckIn = (clientData) => {
	const request = axios.post(`${ROOT_URL}/new/client`, clientData);
	return {
		type: POST_CHECK_IN,
		data: request
	}
};

export {postCheckIn, POST_CHECK_IN};
