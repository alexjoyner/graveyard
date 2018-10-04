import { REMOVE_POINTS } from './types';
import { PointsSocket } from '../../../behaviors/iSocketIO';

const socket = new PointsSocket();

export const removePoints = currentPointsArray => (dispatch) => {
  socket.unsubscribe(currentPointsArray);
  dispatch({
    type: REMOVE_POINTS,
  });
};

