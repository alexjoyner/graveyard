import React from 'react';
import { ISideBar } from 'ro-component-library';
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
