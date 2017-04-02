/* This is a single reducer for our app. In this case, we are just storing
* basic configuration data for our app. If you go to the index.js reducers file, you
* should see that we include this as our config data when we combine our reducers*/

import { FETCH_POSTS, FETCH_POST_DETAIL } from '../actions/index';

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
	switch(action.type) {
		/* If we haven't any data back from our actions,
		* we are just going to return the default data that we initialized above*/
		default:
			return state;
	}
}
