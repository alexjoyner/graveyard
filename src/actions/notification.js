import React from 'react';

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const startLoadingNotif = name => (dispatch) => {
  dispatch({
    name,
    type: SHOW_NOTIFICATION,
    contents: <div>Loading</div>,
  });
};

export const stopLoadingNotif = name => (dispatch) => {
  dispatch({
    name,
    type: HIDE_NOTIFICATION,
  });
};

export const showNotification = (name, message) => (dispatch) => {
  dispatch({
    name,
    type: SHOW_NOTIFICATION,
    contents: <h3>{message}</h3>,
  });
};

export const hideNotification = name => ({
  name,
  type: HIDE_NOTIFICATION,
});

