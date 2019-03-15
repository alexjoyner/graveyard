import { Credentials } from '../types/accounts';
import axios from 'axios';
import { toaster } from 'ro-component-library/Toast';
import { env } from '../../../.env';
import { Dispatch, Reducer } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

const defaultUser = {
  id: 0,
  username: 'OEE Master',
};

const user = localStorage.getItem('user')
export const INITIAL_STATE = {
  user: (user) ? JSON.parse(user) : defaultUser,
  token: localStorage.getItem('token') || null,
};

// TODO: This reducer can be drastically simplified.
//    since we're reloading the app once the user successfully logs in
//    we don't need to handle the actions in the reducers.  Just
//    set the local storage in the action creators
export const reducer:Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN: {
      const { user, token } = action.data;
      if (!user || !token) {
        toaster().negative('Error signing in! Please try again!', {
          autoHideDuration: 8000,
        });
        return state;
      }
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      location.reload(); //eslint-disable-line
      return { ...state, user, token };
    }
    case SIGN_OUT: {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      location.reload(); //eslint-disable-line
      return { ...state, user: defaultUser, token: null };
    }
    default:
      return state;
  }
};


export const trySignIn = (credentials:Credentials) => {
  return async (dispatch:Dispatch) => {
    try {
      const data = await axios.post(`${env.serverAddr}/me/signIn`, credentials);
      if (data.error) {
        return toaster().negative(data.error.message, {
          autoHideDuration: 5000,
        });
      }
      return dispatch({ type: SIGN_IN, data });
    } catch (e) {
      throw new Error(e);
    }
  }
}