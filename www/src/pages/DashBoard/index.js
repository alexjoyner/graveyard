import React from 'react';
import { SideBar } from 'ro-component-library';
import { TestNotification } from '../../organisms/Notifications';
import { DashBody } from '../../organisms/DashBody';
import { DashSideBar } from '../../organisms/DashSideBar';
import { HistoricalGraphModal } from '../../organisms/HistoricalGraphModal';
import { DashHeader } from '../../organisms/DashHeader';

export const DashBoard = () => (
  <SideBar sidebar={DashSideBar}>
    <TestNotification />
    <DashHeader/>
    <DashBody />
    <HistoricalGraphModal />
  </SideBar>
);
