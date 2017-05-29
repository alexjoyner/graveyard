import axios from 'axios';
import validate from 'validator';
import {ROOT_URL} from '../_startup/_config';
export const CHECKOUT_CLIENT = 'CHECKOUT_CLIENT';
export const SEARCH_UNFINISHED = 'SEARCH_UNFINISHED';
export const REMOVE_JOB = 'REMOVE_JOB';

export const searchUnfinished = (event) => {
	let term = event.target.value + '';
	let request = {
		data: []
	};
	if(validate.isAscii(term)){
		request = axios.get(`${ROOT_URL}/searchUnfinished/${term}`);
	}
	return {
		type: SEARCH_UNFINISHED,
		payload: request
	}
};

export const checkOutClient = (jobData) => {
	const request = axios.post(`${ROOT_URL}/checkOut/${jobData._id}`, {
		...jobData.body
	});
	return {
		type: CHECKOUT_CLIENT,
		payload: request
	}
};
export const removeJob = (index) => {
	return {
		type: REMOVE_JOB,
		index
	}
};;
