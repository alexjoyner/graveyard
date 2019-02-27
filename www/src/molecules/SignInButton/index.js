import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ro-component-library/Button';

export const SignInButton = ({ onClick }) => (
  <Button
    model="classic"
    color="primary"
    size="small"
    onClick={onClick}
  >
    <span>Sign In!</span>
  </Button>
);
SignInButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
