import { publishNewPoints, publishNewLog, removeAllPoints } from '.';
import { NEW_POINTS, NEW_LOG, REMOVE_POINTS } from '../types';

describe('publishNewPoints', () => {
  it('should return correct action', () => {
    expect(publishNewPoints([1, 2, 3])).toEqual({
      type: NEW_POINTS,
      data: [1, 2, 3],
    });
  });
});
describe('publishNewLog', () => {
  it('should return correct action', () => {
    expect(publishNewLog([1])).toEqual({
      type: NEW_LOG,
      data: [1],
    });
  });
});
describe('removeAllPoints', () => {
  it('should return correct action', () => {
    expect(removeAllPoints()).toEqual({
      type: REMOVE_POINTS,
    });
  });
});
