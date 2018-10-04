import React from 'react';
import { SHOW_NOTIFICATION, HIDE_NOTIFICATION, START_LOADING, STOP_LOADING } from '../../actions/notification';

const INITIAL_STATE = {
  TEST_NOTIFICATION: {
    shown: false,
    contents: <div></div>
  }
}

export const NotificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        [action.name]: {
          shown: true,
          contents: action.contents || state[action.name].contents
        }
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          shown: false
        }
      };
    default: return state;
  }
}