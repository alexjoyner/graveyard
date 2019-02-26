import React from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';
import { SideBar } from '../../organisms/SideBar';
import { DashBody } from '../../organisms/DashBody/bck';
import { ChartModal } from '../../organisms/ChartModal';
import { Header } from '../../organisms/Header';

export const DashBoard = () => (
  <SideBar>
    <Header />
    <HeaderSideBarPageBody>
      <DashBody />
    </HeaderSideBarPageBody>
    <ChartModal />
  </SideBar>
);
