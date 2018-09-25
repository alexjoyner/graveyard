import { env } from '../../../src/.env';
import { connect } from '../../utils/socket-connection';

export const getPointsLogs = (pointsArray) => {
  return (dispatch) => {
    connect.getLogsSubscription(pointsArray, (err, log) => {
      dispatch({
        type: 'NEW_LOG',
        data: log
      })
    })
  }
}
export const getAllPoints = (clientID) => {
  return async (dispatch) => {
    try {
      const requestUrl = new Request(`${env.serverAddr}/me/points/${clientID}`);
      const response = await fetch(requestUrl);
      const pointsArray = await response.json();
      let pointsIdArray = [];
      for(let i = 0; i < pointsArray.length; i++){
        pointsIdArray.push(pointsArray[i].id);
      }
      getPointsLogs(pointsIdArray)(dispatch);
    }catch(e){
      console.error(e);
    }
  }
}

export const getNewGroupPoints = (groupID) => {
  return async (dispatch) => {
    try {
      const requestUrl = new Request(`${env.serverAddr}/me/points/group/${groupID}`);
      const response = await fetch(requestUrl);
      const pointsArray = await response.json();
      let pointsIdArray = [];
      for(let i = 0; i < pointsArray.length; i++){
        pointsIdArray.push(pointsArray[i].id);
      }
      getPointsLogs(pointsIdArray)(dispatch);
    }catch(e){

    }
  }
}

export const leaveCurrentGroupPoints = (currentPointsArray) => {
  return (dispatch) => {
    connect.unsubscribeFromPoints(currentPointsArray);
    dispatch({
      type: 'REMOVE_POINTS'
    });
  }
}