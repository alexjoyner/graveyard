import React from 'react';
import { SideBar } from '../../organisms/SideBar';
import { DashBody } from '../../organisms/DashBody';
import { ChartModal } from '../../organisms/ChartModal';
import { Header } from '../../organisms/Header';

export const DashBoard = () => (
  <SideBar>
    <Header />
    <DashBody />
    <ChartModal />
  </SideBar>
);
