import {CHECKOUT_CLIENT, HIDE_NOTIFICATIONS} from './actions';

const INITIAL_STATE = {
	showNotif: false
};

const Reducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case CHECKOUT_CLIENT:
			return {...state, showNotif: true};
		default:
			return state;
	}
};

export {Reducer};
