import { NEW_LOG } from './types';
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

