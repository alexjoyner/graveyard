import React from 'react';
import moment from 'moment';
import { Button } from 'ro-component-library';

export const IntervalButton = ({
  interval, children, onClick, ...props
}) => (
  <Button {...props} onClick={() => onClick()}>{children}</Button>
);

