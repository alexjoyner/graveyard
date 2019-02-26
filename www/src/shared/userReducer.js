import { toaster } from 'ro-component-library/Toast';

export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';

const defaultUser = {
  id: 0,
  username: 'OEE Master',
};

console.log(localStorage.getItem('token'));
export const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || defaultUser,
  token: localStorage.getItem('token') || null,
};


export const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER: {
      const { user, token } = action.data;
      if (!user || !token) {
        toaster().negative('Error signing in! Please try again!', {
          autoHideDuration: 8000,
        });
        return state;
      }
      // toaster().positive('Successfully Signed In!', {
      //   autoHideDuration: 8000,
      // });
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      location.reload(); //eslint-disable-line
      return { ...state, user, token };
    }
    case SIGN_OUT: {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      // toaster().positive('Successfully Signed Out!', {
      //   autoHideDuration: 8000,
      // });
      location.reload(); //eslint-disable-line
      return { ...state, user: defaultUser, token: null };
    }
    default:
      return state;
  }
};
