import React from 'react';
import { TEST_NOTIFICATION } from '../organisms/Notifications';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

let notifTimer = null;
export const startLoadingNotif = (name) => {
  return (dispatch) => {
    dispatch({
      name,
      type: SHOW_NOTIFICATION,
      contents: <div>Loading</div>
    })
  }
};
 
export const stopLoadingNotif = (name, message) => {
  return (dispatch) => {
    dispatch({
      name,
      type: HIDE_NOTIFICATION
    })
  }
}; 

export const showNotification = (name, message) => {
  return (dispatch) => {
    dispatch({
      name,
      type: SHOW_NOTIFICATION,
      contents: <h3>{message}</h3>,
    })
    clearTimeout(notifTimer);
    notifTimer = setTimeout(() => {
      hideNotification(TEST_NOTIFICATION)(dispatch);
    }, 2500);
  }
}; 

export const hideNotification = (name) => {
  return (dispatch) => {
    dispatch({
      name,
      type: HIDE_NOTIFICATION
    }) 
  }
}