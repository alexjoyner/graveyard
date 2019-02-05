import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { Header as RoHeader, sideBarActions, Button } from 'ro-component-library';
import { FeedbackButton } from '../FeedbackButton';
import { useWindowSize } from '../../effects/useWindowSize';

const ToggleBtn = props => (
  <Button color="primary" {...props}>
    <GoThreeBars />
  </Button>
);

const logoStyles = {
  marginLeft: '15px',
  fontSize: '2em',
};

const Header = () => {
  const sideBarDocked = useWindowSize();
  return (
    <RoHeader color="dark">
      {(sideBarDocked) ? null : <ToggleBtn onClick={() => sideBarActions().toggle()} />}
      <h1 style={logoStyles}>OEE Master</h1>
      <FeedbackButton />
    </RoHeader>
  );
};

export { Header };
