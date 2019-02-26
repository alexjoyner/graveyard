import React from 'react';
import { connect } from 'react-redux';
import { GoThreeBars } from 'react-icons/go';
import { Header as RoHeader, sideBarActions } from 'ro-component-library';
import { Button } from 'ro-component-library/Button';
import { useWindowSize } from '../../effects/useWindowSize';
import { SignInModal } from '../SignInModal';
import { SignOutButton } from '../../molecules/SignOutButton';

const ToggleBtn = props => (
  <Button color="primary" size="small" {...props}>
    <GoThreeBars />
  </Button>
);

const logoStyles = {
  marginLeft: '10px',
  fontSize: '1.5em',
};

const THeader = ({ user, token, dispatch }) => {
  const { width } = useWindowSize();
  const handleSignOut = () => {
    dispatch({ type: 'SIGN_OUT' });
  };
  return (
    <>
      <RoHeader color="dark">
        {(width > 800) ? null : <ToggleBtn model="classic" onClick={() => sideBarActions().toggle()} />}
        <h1 style={logoStyles}>{user.username}</h1>
        {(token) ? <SignOutButton onClick={handleSignOut} /> : <SignInModal />}
      </RoHeader>
    </>
  );
};

const mapStateToProps = state => ({
  ...state.UserReducer,
});

const Header = connect(mapStateToProps)(THeader);

export { Header };
