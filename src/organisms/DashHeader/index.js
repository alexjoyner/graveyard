import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { Header, ISideBarToggle, Button } from 'ro-component-library';
import { FeedbackButton } from '../FeedbackButton';

const ToggleBtn = props => (
  <Button color="primary" {...props}>
    <GoThreeBars />
  </Button>
);

export const DashHeader = () => (
  <Header color="dark">
    <ISideBarToggle Button={ToggleBtn} />
    <h1>OEE Master</h1>
    <FeedbackButton />
  </Header>
);
