import {POST_CHECK_IN, HIDE_NOTIFICATIONS} from './actions';

const INITIAL_STATE = {
	showNotif: false
};

const Reducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case HIDE_NOTIFICATIONS:
			return {...state, showNotif: false};
		case POST_CHECK_IN:
			return {...state, showNotif: true};
		default:
			return state;
	}
};

export {Reducer};
