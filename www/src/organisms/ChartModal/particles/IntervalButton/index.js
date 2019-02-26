import React from 'react';
import { Button } from 'ro-component-library/Button';
import { getTimeInterval } from '../../utils/getTimeInterval';


export const IntervalButton = ({
  onClick, type, children, ...props
}) => (
  <Button {...props} onClick={() => onClick(getTimeInterval(type || ''))}>
    {children}
  </Button>
);
