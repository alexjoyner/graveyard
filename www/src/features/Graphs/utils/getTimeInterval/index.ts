import moment from 'moment-timezone';

type Intervals = {
  [key: string]: moment.Moment
}
export type Interval = {
  start: moment.Moment,
  end: moment.Moment,
}
export const getTimeInterval = (type: string): Interval => {
  const intervals: Intervals = {
    oneDay: moment().tz('Europe/London').subtract(24, 'hours'),
    oneWeek: moment().tz('Europe/London').subtract(1, 'week'),
    oneMonth: moment().tz('Europe/London').subtract(1, 'month'),
    sixMonths: moment().tz('Europe/London').subtract(6, 'months'),
  };
  return {
    start: intervals[type] || intervals.oneDay,
    end: moment().tz('Europe/London'),
  };
};