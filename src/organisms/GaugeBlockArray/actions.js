import { env } from '../../../src/.env';
import { connect } from '../../utils/socket-connection';

export const NEW_LOG = 'NEW_LOG';
export const REMOVE_POINTS = 'REMOVE_POINTS';

export const subscribeToNewPoints = (pointsArray) => {
  return (dispatch) => {
    connect.getLogsSubscription(pointsArray, (err, log) => {
      dispatch({
        type: NEW_LOG,
        data: log
      })
    })
  }
}
const getPointIdsFrom = async (url) => {
  try {
    const requestUrl = new Request(url);
    const response = await fetch(requestUrl);
    const pointsArray = await response.json();
    let pointsIdArray = [];
    for(let i = 0; i < pointsArray.length; i++){
      pointsIdArray.push(pointsArray[i].id);
    }
    return pointsIdArray;
  }catch (e){
    console.error(e);
  }
} 
export const getAllPoints = (clientID) => {
  return async (dispatch) => {
    try {
      let pointsIdArray = await getPointIdsFrom(`${env.serverAddr}/me/points/${clientID}`);
      subscribeToNewPoints(pointsIdArray)(dispatch);
    }catch(e){
      console.error(e);
    }
  }
}

export const getNewGroupPoints = (groupID) => {
  return async (dispatch) => {
    try {
      let pointsIdArray = await getPointIdsFrom(`${env.serverAddr}/me/points/group/${groupID}`);
      subscribeToNewPoints(pointsIdArray)(dispatch);
    }catch(e){
      console.error(e);
    }
  }
}

export const leaveCurrentGroupPoints = (currentPointsArray) => {
  return (dispatch) => {
    connect.unsubscribeFromPoints(currentPointsArray);
    dispatch({
      type: REMOVE_POINTS
    });
  }
}