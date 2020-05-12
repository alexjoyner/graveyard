import axios from 'axios';

export const POST_NEW_CLIENT = 'POST_NEW_CLIENT';
const ROOT_URL = 'http://localhost:8000';

const postNewClient = (values) => {
	let promise = axios.post(`${ROOT_URL}/checkIn`, values);
	return {
		type: POST_NEW_CLIENT,
		data: promise
	};
};

export {postNewClient};
