import {SHOW_NOTIFICATION, HIDE_NOTIFICATION} from './actions';

const INITIAL_STATE = {
	notifId: 0
};

const Reducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SHOW_NOTIFICATION:
			let {notifId ,header, message, status} = action.payload;
			return {...state, notifId , content: {header, message, status}};
		case HIDE_NOTIFICATION:
			return {...state, notifId: 0};
		default:
			return state;
	}
};

export {Reducer};
