import moment from 'moment';
import { env } from '../../.env';
import { showNotification, START_LOADING, startLoadingNotif, stopLoadingNotif } from '../../actions/notification';
import { TEST_NOTIFICATION } from '../Notifications';

export const GetNewHistoryGraph = (requests, opts) => {
  return async (dispatch) => {
    if (requests.length === 0)
      return showNotification(TEST_NOTIFICATION, 'Please add at least one graph')(dispatch); 
    startLoadingNotif(TEST_NOTIFICATION)(dispatch);
    await GetHistoryData(requests, opts)(dispatch);
    ShowHistoryModal()(dispatch);
    stopLoadingNotif(TEST_NOTIFICATION)(dispatch);
  }
}

export const GetHistoryData = (requests, opts) => {
  return async (dispatch) => {
    try {
      let calls = requests.map((request) => {
        let start, end, fetchUrl;
        const input = request.source.id || '1';
        let now = moment().format('YYYY-MM-DD HH:mm');
        if (opts.start)
          start = opts.startDate.format('YYYY-MM-DD HH:mm');
        if (opts.end)
          end = opts.endDate.format('YYYY-MM-DD HH:mm');
        if (start && end) {
          fetchUrl = new Request(`${env.serverAddr}/history/${input}/from/${start}/${end}`);
        } else if (start && !end) {
          fetchUrl = new Request(`${env.serverAddr}/history/${input}/from/${start}/${now}`);
        } else {
          fetchUrl = new Request(`${env.serverAddr}/history/all/${input}`);
        }
        return fetch(fetchUrl);
      })
      let responses = await Promise.all(calls);
      let jsonCalls = responses.map((response) => response.json());
      let rawData = await Promise.all(jsonCalls);
      let result = rawData.map((data, i) => {
        return {
          source: {
            id: requests[i].source.id,
            inputname: requests[i].source.name,
            unit: requests[i].source.unit
          },
          data
        }
      })
      dispatch({
        type: 'NEW_HISTORICAL_DATA',
        data: result,
      });
    }
    catch (e) {
      console.error(e);
    }
  }

}

export const ShowHistoryModal = () => {
  return (dispatch) => {
    dispatch({
      type: 'SHOW_HISTORICAL_MODAL'
    });
  }
}