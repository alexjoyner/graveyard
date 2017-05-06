import { POST_PREORDER, POST_COMMENT } from './actions';

const INITIAL_STATE = {
	appName: 'your-app-name',
	comments: ['Test comment'],
	preOrders: 1
};

const demoReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case POST_PREORDER:
			return {...state, preOrders: state.preOrders + 1};
		case POST_COMMENT:
			return {...state, comments: [...state.comments, action.data]};
		default:
			return state;
	}
};

export {demoReducer};
