import axios from 'axios';
import {ROOT_URL} from '../_startup/_config';
const POST_CHECK_IN = 'POST_CHECK_IN';

const postCheckIn = (clientData) => {
	console.log('Post check in');
	return {
		type: POST_CHECK_IN
	}
};

export {postCheckIn};
