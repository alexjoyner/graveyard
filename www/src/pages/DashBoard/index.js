import React from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';
import { SideBar } from '../../organisms/SideBar';
import { Header } from '../../organisms/Header';
import { DashBody } from '../../organisms/DashBody/bck';
import { ChartModal } from '../../organisms/ChartModal';

const DashBoard = () => (
  <SideBar>
    <Header />
    <HeaderSideBarPageBody>
      <DashBody />
    </HeaderSideBarPageBody>
    <ChartModal />
  </SideBar>
);

export { DashBoard };
