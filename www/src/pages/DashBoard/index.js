import React from 'react';
import { SideBar } from '../../organisms/SideBar';
import { TestNotification } from '../../organisms/Notifications';
import { DashBody } from '../../organisms/DashBody';
import { HistoricalGraphModal } from '../../organisms/HistoricalGraphModal';
import { Header } from '../../organisms/Header';

export const DashBoard = () => (
  <SideBar>
    <Header />
    <DashBody />
    <TestNotification />
    <HistoricalGraphModal />
  </SideBar>
);
