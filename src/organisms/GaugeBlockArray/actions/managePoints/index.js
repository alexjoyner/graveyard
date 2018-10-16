import { NEW_LOG, REMOVE_POINTS, NEW_POINTS } from '../types';

export const publishNewPoints = points => ({
  type: NEW_POINTS,
  data: points,
});

export const publishNewLog = log => ({
  type: NEW_LOG,
  data: log,
});

export const removeAllPoints = () => ({
  type: REMOVE_POINTS,
});
