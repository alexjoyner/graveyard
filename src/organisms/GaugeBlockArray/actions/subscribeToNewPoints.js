import { SocketConnection } from "../../../utils/socket-connection";
import { NEW_LOG } from "./types";

export const subscribeToNewPoints = (pointsArray) => {
  return (dispatch) => {
    SocketConnection.subscribeToPoints(pointsArray, (err, log) => {
      dispatch({
        type: NEW_LOG,
        data: log
      })
    })
  }
}