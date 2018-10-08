import React from 'react';

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const startLoadingNotif = name => ({
  name,
  type: SHOW_NOTIFICATION,
  contents: <h1>Loading</h1>,
});

export const stopLoadingNotif = name => ({
  name,
  type: HIDE_NOTIFICATION,
});

export const showNotification = (name, message) => ({
  name,
  type: SHOW_NOTIFICATION,
  contents: <h3>{message}</h3>,
});

export const hideNotification = name => ({
  name,
  type: HIDE_NOTIFICATION,
});

