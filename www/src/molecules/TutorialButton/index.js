import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'ro-component-library/StyledComponents';
import { Button } from 'ro-component-library/Button';

const pulse = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1); }
  40% { transform: scale(1.7); }
  50% { transform: scale(1); }
  60% { transform: scale(1); }
  70% { transform: scale(1.05); }
  80% { transform: scale(1); }
  100% { transform: scale(1); }
`;

const Animate = styled.div`
  display: inline-block;
  ${props => (props.animate) && css`
    animation: ${pulse} 2s linear infinite;
  `}
`;

export const TutorialButton = ({ animate, onClick }) => (
  <Animate animate={animate}>
    <Button
      model="classic"
      color="primary"
      size="small"
      onClick={onClick}
    >
      <span>Help</span>
    </Button>
  </Animate>
);
TutorialButton.propTypes = {
  animate: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
