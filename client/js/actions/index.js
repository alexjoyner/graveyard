import axios from 'axios';


/*
* We keep our action types in a variable for the purposes of
* making sure that our action values stay consistent throughout our app
* and we don't mess up and have what we called the action in our reducer switch
* be the same thing that we named our action type in our action creator return.
* NOTE: For consistency, make sure the variable name here is the same thing as
* the string name value of the action name.
*  Meaning	\/ \/ \/ \/ \/===\/ \/ \/ \/ \/ \/ */
export const POST_PREORDER = 'POST_PREORDER';

const ROOT_URL = 'http://localhost:8080';

/*
* This function preOrderApp is called an action creator,
* an action creator is a function that returns an action
* */
export const preOrderApp = (preOrders) => {/**/
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
