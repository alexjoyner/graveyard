import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { ISideBar, Button } from 'ro-component-library';
import { Header } from 'ro-component-library/lib/atoms/Header';
import { HeaderSideBarPageBody } from 'ro-component-library/lib/atoms/SideBar/SideBarPageBody';
import { ISideBarToggle } from 'ro-component-library/lib/behaviors/ISideBar/ISideBarToggle';
import { AnimatedSideBar } from 'ro-component-library/lib/atoms/SideBar';
import { TestNotification } from '../../organisms/Notifications';
import { SideBarContent } from '../../organisms/SideBarContent';
import { GaugeBlockArray } from '../../organisms/GaugeBlockArray';

const ToggleBtn = () => (
  <Button color="primary">
    <GoThreeBars />
  </Button>
);
const DashSideBar = () => (
  <AnimatedSideBar color="dark">
    <SideBarContent />
  </AnimatedSideBar>
);
const DashBody = () => (
  <HeaderSideBarPageBody>
    <GaugeBlockArray />
  </HeaderSideBarPageBody>
);
export const DashBoard = () => (
  <>
    <TestNotification />
    <Header color="dark">
      <ISideBarToggle Button={ToggleBtn} />
      <h1>OEE Master</h1>
    </Header>
    <ISideBar {...{
      SideBar: DashSideBar,
      Body: DashBody,
    }}
    />
  </>
);
