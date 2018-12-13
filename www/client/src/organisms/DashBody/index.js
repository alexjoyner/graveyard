import React from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';
import { GaugeBlockArray } from '../GaugeBlockArray';

export const DashBody = props => (
  <HeaderSideBarPageBody {...props}>
    <GaugeBlockArray />
  </HeaderSideBarPageBody>
);
