import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { Header, sideBarActions, Button } from 'ro-component-library';
import { FeedbackButton } from '../FeedbackButton';

const ToggleBtn = props => (
  <Button color="primary" {...props}>
    <GoThreeBars />
  </Button>
);

export const DashHeader = ({toggleSideBar}) => (
  <Header color="dark">
    <ToggleBtn onClick={() => sideBarActions().toggle()} />
    <h1>OEE Master</h1>
    <FeedbackButton />
  </Header>
);
