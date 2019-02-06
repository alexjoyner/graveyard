import { getTimeInterval } from './';  //eslint-disable-line

describe('getTimeInterval', () => {
  it('should have correct default values', () => {
    expect(getTimeInterval()).toEqual({});
  });
  it('should allow these intervals', () => {
    expect(getTimeInterval('oneDay')).not.toEqual({});
    expect(getTimeInterval('oneWeek')).not.toEqual({});
    expect(getTimeInterval('oneMonth')).not.toEqual({});
    expect(getTimeInterval('sixMonths')).not.toEqual({});
  });
});
