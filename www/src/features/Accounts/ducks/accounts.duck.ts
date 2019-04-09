import { Credentials } from '../types/accounts';
import axios from 'axios';
import { toaster } from 'ro-component-library/Toast';
import { env } from '../../../.env';
import { Dispatch, Reducer, Action } from 'redux';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

const DEFAULT_USER = {
	id: 0,
	username: 'OEE Master'
};
const user = localStorage.getItem('user');
export const INITIAL_STATE = {
	user: user ? JSON.parse(user) : DEFAULT_USER,
	token: localStorage.getItem('token') || null
};

// TODO: Right now, all actions set user data and reload the page.  It would
//   work much better to set the user data in the reducer and populate the page with
//   user data
export const reducer: Reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN:
			return { ...state, user: action.data.user, token: action.data.token };
		default:
			return state;
	}
};

export const trySignIn = (credentials: Credentials) => {
	return async (dispatch: Dispatch) => {
		try {
			const response = await axios.post(
				`${env.serverAddr}/me/signIn`,
				credentials
			);
			const { user, token } = response.data;
			if (!user || !token) {
				toaster().negative('Error signing in! Please try again!', {
					autoHideDuration: 8000
				});
			}
			localStorage.setItem('user', JSON.stringify(user));
			localStorage.setItem('token', token);
			return dispatch({
				type: SIGN_IN,
				data: response.data
			});
		} catch (err) {
			toaster().negative(err.response.data.error.message, {
				autoHideDuration: 5000
			});
		}
	};
};

export const signOut = () => {
	localStorage.removeItem('user');
	localStorage.removeItem('token');
	location.reload(); //eslint-disable-line
};
