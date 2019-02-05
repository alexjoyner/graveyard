import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { Header as RoHeader, sideBarActions, Button } from 'ro-component-library';
import { FeedbackButton } from '../FeedbackButton';

const ToggleBtn = props => (
  <Button color="primary" {...props}>
    <GoThreeBars />
  </Button>
);

const Header = () => (
  <RoHeader color="dark">
    <ToggleBtn onClick={() => sideBarActions().toggle()} />
    <h1>OEE Master</h1>
    <FeedbackButton />
  </RoHeader>
);

export { Header };
