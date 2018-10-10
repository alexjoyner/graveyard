import React from 'react';
import { NotificationReducer } from './reducer';
import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../../actions/notification';

describe('NotificationReducer', () => {
  let InitialState;
  beforeEach(() => {
    InitialState = {
      test: {
        shown: true,
        contents: null,
      },
    };
  });
  it('should return initial state', () => {
    const state = NotificationReducer(InitialState, {});
    expect(state).toEqual(InitialState);
  });
  it('should allow showing notification', () => {
    const state = NotificationReducer(InitialState, {
      type: SHOW_NOTIFICATION,
      name: 'test',
      contents: <h1>Testing</h1>,
    });
    expect(state).toEqual({
      ...InitialState,
      test: {
        shown: true,
        contents: <h1>Testing</h1>,
      },
    });
  });
  it('should allow hiding notification', () => {
    const state = NotificationReducer(InitialState, {
      type: HIDE_NOTIFICATION,
      name: 'test',
    });
    expect(state).toEqual({
      ...InitialState,
      test: {
        shown: false,
        contents: null,
      },
    });
  });
});
