import React from 'react';
import moment from 'moment';
import { Button } from 'ro-component-library';

const getInterval = (type) => {
  const startPoints = {
    oneDay: moment().subtract(24, 'hours'),
    oneWeek: moment().subtract(1, 'week'),
    oneMonth: moment().subtract(1, 'month'),
    sixMonths: moment().subtract(6, 'months'),
  };
  if (startPoints[type]) {
    return {
      start: startPoints[type],
      end: moment(),
    };
  }
  return {};
};

export const IntervalButton = ({
  onClick, type, ...props
}) => (
  <Button {...props} onClick={() => onClick(getInterval(type || ''))}>
    {props.children}
  </Button>
);
