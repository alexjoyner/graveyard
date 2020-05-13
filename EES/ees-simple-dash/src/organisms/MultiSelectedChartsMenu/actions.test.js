import { removePoint, REMOVE_POINT } from './actions';

describe('removePoint', () => {
  it('should return correct action', () => {
    expect(removePoint(1)).toEqual({
      type: REMOVE_POINT,
      data: 1,
    });
  });
});
