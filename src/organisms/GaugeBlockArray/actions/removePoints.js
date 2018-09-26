import { SocketConnection } from "../../../utils/socket-connection";
import { REMOVE_POINTS } from "./types";

export const removePoints = (currentPointsArray) => {
  return (dispatch) => {
    SocketConnection.unsubscribeFromPoints(currentPointsArray);
    dispatch({
      type: REMOVE_POINTS
    });
  }
}