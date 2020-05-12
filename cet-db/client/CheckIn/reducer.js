import {POST_CHECK_IN} from './actions';

const INITIAL_STATE = {};

const Reducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case POST_CHECK_IN:
			return {...state};
		default:
			return state;
	}
};

export {Reducer};
