import { FETCH_POSTS, FETCH_POST_DETAIL } from '../actions/index';

const INITIAL_STATE = { appName: 'Voicir', version: 'v1.0.0 Alpha.11.5' };

// With axios and redux promises, the data returned
// from API calls will be available at action.payload.data
//
// In redux we always return a new object
//
// { ...state, all: action.payload.data } this syntax means:
// take whatever the state is and ADD rest on
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		default:
			return state;
	}
}
