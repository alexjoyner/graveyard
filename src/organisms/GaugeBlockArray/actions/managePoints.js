import { NEW_LOG, REMOVE_POINTS } from './types';

export const publishNewLog = log => ({
  type: NEW_LOG,
  data: log,
});

export const removeAllPoints = () => ({
  type: REMOVE_POINTS,
});
