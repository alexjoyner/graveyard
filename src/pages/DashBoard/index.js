import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { ISideBar, Button } from 'ro-component-library';
import { Header } from 'ro-component-library/lib/atoms/Header';
import { ISideBarToggle } from 'ro-component-library/lib/behaviors/ISideBar/ISideBarToggle';
import { TestNotification } from '../../organisms/Notifications';
import { DashBody } from '../../organisms/DashBody';
import { DashSideBar } from '../../organisms/DashSideBar';
import { HistoricalGraphModal } from '../../organisms/HistoricalGraphModal';
import { DashHeader } from '../../organisms/DashHeader';

export const DashBoard = () => (
  <>
    <TestNotification />
    <DashHeader />
    <ISideBar {...{
      SideBar: DashSideBar,
      Body: DashBody,
    }}
    />
    <HistoricalGraphModal />
  </>
);
