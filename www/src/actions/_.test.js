import React from 'react';
import { startLoadingNotif, stopLoadingNotif, showNotification, hideNotification, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './notification';

describe('Notification Actions', () => {
  describe('startLoadingNotif', () => {
    it('should return correct action', () => {
      expect(startLoadingNotif('test')).toEqual({
        name: 'test',
        contents: <h1>Loading</h1>,
        type: SHOW_NOTIFICATION,
      });
    });
  });
  describe('stopLoadingNotif', () => {
    it('should return correct action', () => {
      expect(stopLoadingNotif('test')).toEqual({
        name: 'test',
        type: HIDE_NOTIFICATION,
      });
    });
  });
  describe('showNotifaction', () => {
    it('should return correct action', () => {
      expect(showNotification('test', 'testing')).toEqual({
        name: 'test',
        contents: <h3>testing</h3>,
        type: SHOW_NOTIFICATION,
      });
    });
  });
  describe('hideNotification', () => {
    it('should return correct action', () => {
      expect(hideNotification('test')).toEqual({
        name: 'test',
        type: HIDE_NOTIFICATION,
      });
    });
  });
});
