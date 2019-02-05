import React from 'react';
import { PLACEMENT } from 'baseui/toast';
import { Toast } from 'ro-component-library';
import { DashBoard } from './pages/DashBoard';

const toastOverrides = {
  Root: {
    style: {
      zIndex: 1000,
    },
  },
};

export const App = () => (
  <>
    <Toast placement={PLACEMENT.bottomLeft} overrides={toastOverrides} />
    <DashBoard />
  </>
);
export default App;
