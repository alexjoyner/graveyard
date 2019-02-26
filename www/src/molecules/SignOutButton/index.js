import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ro-component-library/Button';

export const SignOutButton = ({ onClick }) => (
  <Button
    model="classic"
    color="primary"
    size="small"
    onClick={onClick}
    style={{
      position: 'absolute',
      right: '10px',
    }}
  >
    <span>Sign Out</span>
  </Button>
);
SignOutButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
