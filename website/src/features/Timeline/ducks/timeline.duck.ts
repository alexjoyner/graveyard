import { Reducer } from 'redux';

export const INITIAL_STATE = {};

export const reducer: Reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case '__INIT__':
			return INITIAL_STATE;
		default:
			return state;
	}
};
