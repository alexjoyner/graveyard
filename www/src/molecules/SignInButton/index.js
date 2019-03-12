import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ro-component-library/Button';

export const SignInButton = ({ onClick }) => (
  <Button
    size="compact"
    onClick={onClick}
  >
    <span>Sign In!</span>
  </Button>
);
SignInButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
