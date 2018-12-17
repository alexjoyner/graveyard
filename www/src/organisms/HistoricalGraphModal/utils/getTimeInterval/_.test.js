jest.mock('moment');
import { getTimeInterval } from './';  //eslint-disable-line


describe('getTimeInterval', () => {
  const testMoment = { subtract: expect.any(Function) };
  it('should have correct default values', () => {
    expect(getTimeInterval()).toEqual({});
  });
  it('should allow 1 day', () => {
    expect(getTimeInterval('oneDay')).toEqual({
      end: testMoment,
      start: '24hours',
    });
  });
  it('should allow 1 week', () => {
    expect(getTimeInterval('oneWeek')).toEqual({
      end: testMoment,
      start: '1week',
    });
  });
  it('should allow 1 month', () => {
    expect(getTimeInterval('oneMonth')).toEqual({
      end: testMoment,
      start: '1month',
    });
  });
  it('should allow 6 months', () => {
    expect(getTimeInterval('sixMonths')).toEqual({
      end: testMoment,
      start: '6months',
    });
  });
});
