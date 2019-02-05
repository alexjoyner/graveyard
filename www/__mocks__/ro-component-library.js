import React from 'react';

const TestComponent = ({ children, ...props }) => (<div {...props}>{children}</div>);

export const Go = props => <TestComponent {...props} />;
export const Button = props => <TestComponent {...props} />;
export const toaster = jest.fn(() => ({
  warning: () => null,
}));
