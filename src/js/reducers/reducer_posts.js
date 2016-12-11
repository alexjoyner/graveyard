import { FETCH_POSTS, FETCH_POST_DETAIL, SEARCH_POSTS } from '../actions/index';

const INITIAL_STATE = { all: [], post: null, searchResults: [] };

// With axios and redux promises, the data returned
// from API calls will be available at action.payload.data
//
// In redux we always return a new object
//
// { ...state, all: action.payload.data } this syntax means:
// take whatever the state is and ADD rest on
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POSTS:
			return { ...state, all: action.payload.data };
			break;
		case FETCH_POST_DETAIL:
			console.log(action.payload.data);
			return { ...state, post: action.payload.data };
			break;
		case SEARCH_POSTS:
			console.log(action.payload.data);
			return { ...state, searchResults: action.payload.data || [] };
			break;
		default:
			return state;
	}
}
