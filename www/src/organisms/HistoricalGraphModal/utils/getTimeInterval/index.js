import moment from 'moment';


export const getTimeInterval = (type) => {
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
