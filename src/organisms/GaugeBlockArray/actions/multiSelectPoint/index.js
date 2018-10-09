import { MULTISELECT_DESELECT_POINT, MULTISELECT_POINT } from '../types';

export const multiSelectPoint = (point, id) => ({
  type: MULTISELECT_POINT,
  data: { point, id },
});

export const multiDeselectPoint = id => ({
  type: MULTISELECT_DESELECT_POINT,
  data: id,
});
