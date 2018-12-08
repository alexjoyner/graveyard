import { multiSelectPoint, multiDeselectPoint } from '.';
import { MULTISELECT_POINT, MULTISELECT_DESELECT_POINT } from '../types';

describe('multiselect point', () => {
  it('should return correct action', () => {
    expect(multiSelectPoint('test', 1)).toEqual({
      type: MULTISELECT_POINT,
      data: {
        point: 'test',
        id: 1,
      },
    });
  });
});
describe('multiDeselect point', () => {
  it('should return correct action', () => {
    expect(multiDeselectPoint(1)).toEqual({
      type: MULTISELECT_DESELECT_POINT,
      data: {
        id: 1,
      },
    });
  });
});
