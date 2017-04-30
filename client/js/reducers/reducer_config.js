import { POST_PREORDER } from '../actions/index';

const INITIAL_STATE = {
	appName: 'your-app-name',
	version: 'v0.0.1',
	preOrders: 1
};

const configReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case POST_PREORDER:
			return {...state, preOrders: action.payload.data.preOrdersNow};
			break;
		default:
			return state;
	}
};

export {configReducer};
