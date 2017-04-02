/* This is a single reducer for our app. In this case, we are just storing
* basic configuration data for our app. If you go to the index.js reducers file, you
* should see that we include this as our config data when we combine our reducers*/

import { POST_PREORDER } from '../actions/index';

const INITIAL_STATE = {
	appName: 'your-app-name',
	version: 'v1.0.0 Alpha.11.5',
	preOrders: 1
};

// With axios and redux promises, the data returned
// from API calls will be available at action.payload.data
//
// In redux we always return a new object
//
// { ...state, all: action.payload.data } this syntax means:
// take whatever the state is and ADD rest on
export default function(state = INITIAL_STATE, action) {
	/*
	* Whenever an action is made, it is voiced out to all of our reducers.
	* If a reducer is listening for that action by it's action.type, it will run through
	* this switch statement to say how to handle it.
	* */
	switch(action.type) {
		case POST_PREORDER:
			/*
			* When an action happens, this is where we modify our state based off
			* the changes. The following line of code modifies the number of preOrders of our demo
			* with the syntax
			* ...state (Take our state object) ,
			* preOrders : [data] (Change our preOrders with this data)
			* */
			return {...state, preOrders: action.payload.data.preOrdersNow};
			break;
		/* If we haven't any data back from our actions,
		 * we are just going to return the default data that we initialized above*/
		default:
			return state;
	}
}
