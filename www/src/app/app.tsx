import React from 'react';
import { PLACEMENT } from 'baseui/toast';
import { Toast } from 'ro-component-library/Toast';
import { DashBoard } from '../pages/DashBoard';

const toastOverrides = {
  Root: {
    style: {
      zIndex: 3000,
    },
  },
};

export const App = () => (
  <>
    <h1>Hello World!</h1>
  </>
);
// export const App = () => (
//   <>
//     <Toast placement={PLACEMENT.bottomLeft} overrides={toastOverrides} />
//     <DashBoard />
//   </>
// );
