import React from 'react';
import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../../actions/notification';

export const INITIAL_STATE = {
  TEST_NOTIFICATION: {
    shown: false,
    contents: <div />,
  },
};

export const NotificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        [action.name]: {
          shown: true,
          contents: action.contents,
        },
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          shown: false,
        },
      };
    default: return state;
  }
};

