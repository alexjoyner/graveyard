import React from 'react';
import { ISideBar, BasicSideBar, BasicSideBarPageBody } from 'ro-component-library';

console.log(BasicSideBar);
export const DashBoard = () => (
  <ISideBar {...{
    SideBar: BasicSideBar,
    Body: BasicSideBarPageBody,
  }}
  />
);
