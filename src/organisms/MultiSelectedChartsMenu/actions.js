export const REMOVE_POINT = 'REMOVE_POINT';

export const removePoint = point => ({
  type: REMOVE_POINT,
  data: point,
});
