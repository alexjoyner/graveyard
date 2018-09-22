import { env } from '../../../src/.env';
import { connect } from '../../utils/socket-connection';

export const getEzeData = (username, pass) => {
  return async (dispatch) => {
    try {
      const requestUrl = new Request(`${env.serverAddr}/v1/status/${username}/${pass}`);
      const response = await fetch(requestUrl);
      const myJson = await response.json();
      console.log('EZE-DATA: ', myJson)
      if(myJson.status === 'Offline')
        return alert('System offline');
      dispatch({
        type: 'NEW_INPUTS',
        data: myJson
      });
    }
    catch(e) {
      console.error(e);
    }
  }
}

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