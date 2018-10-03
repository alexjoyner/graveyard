import React from 'react';
import { SHOW_NOTIFICATION, HIDE_NOTIFICATION, START_LOADING, STOP_LOADING } from '../../actions/actions';

const INITIAL_STATE = {
  shown: false,
  contents: <div />
}

export const NotificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return { ...state, shown: true, contents: <h3>{action.data}</h3> };
    case START_LOADING:
      return { ...state, shown: true, contents: <h1>Loading</h1> };
    case STOP_LOADING:
    case HIDE_NOTIFICATION:
      return { ...state, shown: false };
    default: return state;
  }
}