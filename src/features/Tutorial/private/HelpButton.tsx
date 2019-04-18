import React, { FC } from 'react';
import { Button } from 'ro-component-library/Button';
import { Popover, PLACEMENT } from 'ro-component-library/Popover';
import { Block } from 'ro-component-library/Block';

export const HelpButton: FC<{
  showAttentionPopover: boolean,
  onClick: () => void
}> = ({ showAttentionPopover, onClick }) => (
  <Popover
    isOpen={showAttentionPopover}
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