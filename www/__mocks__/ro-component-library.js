import React from 'react';

export const Go = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const Button = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const Header = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const GaugeBlock = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const HeaderSideBarPageBody = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const Toast = ({ children, ...props }) => (<div {...props}>{children}</div>);
export const toaster = jest.fn(() => ({
  warning: () => null,
}));
export const sideBarActions = jest.fn(() => ({
  toggle: () => null,
}));
