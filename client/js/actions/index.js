import axios from 'axios';


const POST_PREORDER = 'POST_PREORDER';

const ROOT_URL = 'http://localhost:8080';

/*
* This function preOrderApp is called an action creator,
* an action creator is a function that returns an action
* */
const preOrderApp = (preOrders) => {/**/
	/*
	* The return data is the action, for this action creator.
	*
	* All an action does is say: Hey, my application did something,
	* it needs to be passed to a reducer to change the application
	* data based off what happened
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

export {
	POST_PREORDER,
	preOrderApp
}
