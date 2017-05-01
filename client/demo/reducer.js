import { POST_PREORDER } from './actions';

const INITIAL_STATE = {
	appName: 'your-app-name',
	version: 'v0.0.1',
	preOrders: 1
};

const demoReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case POST_PREORDER:
			return {...state, preOrders: action.payload.data.preOrdersNow};
		default:
			return state;
	}
};

export {demoReducer};
