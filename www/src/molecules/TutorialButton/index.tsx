import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ro-component-library/Button';
import { Popover, PLACEMENT } from 'ro-component-library/Popover';
import { Block } from 'ro-component-library/Block';

export const TutorialButton = ({ animate, onClick }) => (
  <Popover
    isOpen={animate}
    content={() => (
      <Block
        padding="scale900"
        maxWidth="200px"
      >
        <span>Click HELP to view a tutorial!</span>
      </Block>
    )}
    showArrow
    placement={PLACEMENT.bottom}
    onClick={onClick}
  >
    <Button
      size="compact"
      style={{ marginRight: '5px' }}
    >
      <span>Help</span>
    </Button>
  </Popover>
);
TutorialButton.propTypes = {
  animate: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
