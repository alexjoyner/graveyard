import React from 'react';
import { Notification } from 'ro-component-library';
import { BaseNotification } from './BaseNotification';

export const TEST_NOTIFICATION = 'TEST_NOTIFICATION';

export const TestNotification = () => {
  const strategy = {
    name: TEST_NOTIFICATION,
    BaseComponent: Notification,
  };
  return (
    <BaseNotification {...strategy} />
  );
};
