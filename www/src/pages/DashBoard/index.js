import React from 'react';
import { SideBar } from '../../molecules/SideBar';
import { TestNotification } from '../../organisms/Notifications';
import { DashBody } from '../../organisms/DashBody';
import { HistoricalGraphModal } from '../../organisms/HistoricalGraphModal';
import { DashHeader } from '../../organisms/DashHeader';

export const DashBoard = () => (
  <SideBar>
    <TestNotification />
    <DashHeader />
    <DashBody />
    <HistoricalGraphModal />
  </SideBar>
);
