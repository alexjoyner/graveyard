import { removePoint, REMOVE_POINT } from './gauges.duck';

describe('removePoint', () => {
  it('should return correct action', () => {
    expect(removePoint(1)).toEqual({
      type: REMOVE_POINT,
      data: 1,
    });
  });
});