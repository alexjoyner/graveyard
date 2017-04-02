import axios from 'axios';

export const POST_PREORDER = 'POST_PREORDER';

const ROOT_URL = 'http://localhost:8080';

/*
* This function preOrderApp is called an action creator,
* an action creator is a function that returns an action
* */
export const preOrderApp = (preOrders) => {
	console.log('PREORDERS: ', preOrders + 1);
	/*
	* The return data is the action, for this action creator
	* */
	return {
		type: POST_PREORDER,
		payload: {
			data: {
				preOrdersNow: preOrders + 1
			}
		}
	};
};
