import React from 'react';

const Proxy = ({ children }) => (
  <div>{children}</div>
);
export const Go = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const Button = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const Header = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const GaugeBlock = ({ children, ...props }) => (<Proxy {...props}>{children}</Proxy>);
export const HeaderSideBarPageBody = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const Modal = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const Toast = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const toasterAPI = {
  warning: jest.fn(),
  info: jest.fn(),
  clear: jest.fn(),
};
export const toaster = jest.fn(() => toasterAPI);
export const sideBarActionsAPI = {
  toggle: jest.fn(),
};
export const sideBarActions = jest.fn(() => sideBarActionsAPI);
export const colors = {
  default: '#default',
  defaultLight: '#defaultLight',
  primary: '#primary',
  primaryLight: '#primaryLight',
  info: '#info',
  infoLight: '#infoLight',
  success: '#success',
  successLight: '#successLight',
  warning: '#warning',
  warningLight: '#warningLight',
  danger: '#danger',
  dangerLight: '#dangerLight',
  dark: '#dark',
  darkLight: '#darkLight',
};

export const ListItem = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const ListHeader = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const CenteredContent = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const RoHighChart = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const Panel = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const PlainBox = ({ children, ...props }) => (<div {...props}>{children}</div>);
