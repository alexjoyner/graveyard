import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { Header as RoHeader, sideBarActions } from 'ro-component-library';
import { Button } from 'ro-component-library/Button';
import { FeedbackButton } from '../../molecules/FeedbackButton';
import { useWindowSize } from '../../effects/useWindowSize';

const ToggleBtn = props => (
  <Button color="primary" size="small" {...props}>
    <GoThreeBars />
  </Button>
);

const logoStyles = {
  marginLeft: '10px',
  fontSize: '1.5em',
};

const Header = () => {
  const { width } = useWindowSize();
  return (
    <>
      <RoHeader color="dark">
        {(width > 800) ? null : <ToggleBtn onClick={() => sideBarActions().toggle()} />}
        <h1 style={logoStyles}>OEE Master</h1>
        <FeedbackButton />
      </RoHeader>
    </>
  );
};

export { Header };
