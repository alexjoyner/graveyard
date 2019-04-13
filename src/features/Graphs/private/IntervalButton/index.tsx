import React, { FC, ReactNode } from 'react';
import { Button } from 'ro-component-library/Button';
import { getTimeInterval, Interval } from '../../utils/getTimeInterval';

type IntervalButtonProps = {
  children: ReactNode | string,
  size: string,
  onClick: (interval: Interval) => void,
  type: string,
}
export const IntervalButton: FC<IntervalButtonProps> = ({
  onClick, type, children, ...props
}) => (
    <Button {...props} onClick={() => onClick(getTimeInterval(type || ''))}>
      {children}
    </Button>
  );