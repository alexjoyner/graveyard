import React from 'react';
import { AnimatedSideBar } from 'ro-component-library';
import { SideBarContent } from '../SideBarContent';

export const DashSideBar = props => (
  <AnimatedSideBar color="dark" {...props}>
    <SideBarContent />
  </AnimatedSideBar>
);
