import { NEW_LOG, REMOVE_POINTS } from './types';
import { PointsSocket } from '../../../behaviors/iSocketIO';

const socket = new PointsSocket();
export const subscribeToNewPoints = pointsArray => (dispatch) => {
  socket.subscribe(pointsArray, (err, log) => {
    dispatch({
      type: NEW_LOG,
      data: log,
    });
  });
};

export const removePoints = () => (dispatch) => {
  socket.unsubscribe();
  dispatch({
    type: REMOVE_POINTS,
  });
};
