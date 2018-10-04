import { NEW_LOG } from "./types";
import { PointsSocket } from "../../../behaviors/iSocketIO";
const socket = new PointsSocket();
export const subscribeToNewPoints = (pointsArray) => {
  return (dispatch) => {
    socket.subscribe(pointsArray, (err, log) => {
      dispatch({
        type: NEW_LOG,
        data: log
      })
    })
  }
}