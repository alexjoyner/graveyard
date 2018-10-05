import { MULTISELECT_DESELECT_POINT, MULTISELECT_POINT } from './types';

export const multiSelectPoint = (input, id) => ({
  type: MULTISELECT_POINT,
  data: { input, id },
});

export const multiDeselectPoint = id => ({
  type: MULTISELECT_DESELECT_POINT,
  data: id,
});
