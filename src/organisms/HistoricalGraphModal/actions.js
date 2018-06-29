import { env } from '../../.env';

export const ShowHistoryGraph = (username, pass) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'LOADING_HISTORICAL_DATA',
        data: myJson
      });
      const requestUrl = new Request(`${env.serverAddr}/history/AAE599/romeo6424/?input=2&from=2017-12-18&to=2017-12-24`);
      const response = await fetch(requestUrl);
      const myJson = await response.json();
      console.log('Data before converion: ', myJson);
      myJson.data = myJson.data.map((point) => {
        return [(new Date(point.time)).getTime(), point.value]
      });
      dispatch({
        type: 'NEW_HISTORICAL_DATA',
        data: myJson
      });
      dispatch({
        type: 'SHOW_HISTORICAL_MODAL'
      });
    }
    catch (e) {
        console.error(e);
    }
  }
}