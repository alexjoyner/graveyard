import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ro-component-library/Button';

export const SignOutButton = ({ onClick }) => (
  <Button
    size="compact"
    onClick={onClick}
  >
    <span>Sign Out</span>
  </Button>
);
SignOutButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
