import moment from 'moment';
import { env } from '../../.env';
import { showBasicNotification } from '../DashNotification/actions';

export const GetNewHistoryGraph = (requests, opts) => {
  return async (dispatch) => {
    if(requests.length === 0)
      return showBasicNotification('Please add at least one graph')(dispatch);
    ShowHistoryGraphLoading()(dispatch);
    await GetNewHistoryData(requests, opts)(dispatch);
    ShowHistoryModal()(dispatch);
  }
}

export const ShowHistoryGraphLoading = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOADING_START'
    });
  }
}

export const GetNewHistoryData = (requests, opts) => {
  return async (dispatch) => {
    try {
      let calls = requests.map((request) => {
        let start = opts.startDate || moment('2017-12-18');
        let end = opts.endDate || moment('2017-12-19');
        const input = request.source.inputnumber || '1';
        start = start.format('YYYY-MM-DD HH:mm');
        end = end.format('YYYY-MM-DD HH:mm');
        const fetchUrl = new Request(`${env.serverAddr}/v1/history/AAE599/romeo6424/?input=${input}&from=${start}&to=${end}`);
        return fetch(fetchUrl);
      })
      let responses = await Promise.all(calls);
      let jsonCalls = responses.map((response) => response.json());
      let rawResults = await Promise.all(jsonCalls);
      const finalResult = rawResults.map((rawResult) => {
        rawResult.data = rawResult.data.map((point) => {
          return [(new Date(point.time)).getTime(), point.value]
        });
        return rawResult;
      });
      console.log('History Data: ', finalResult);
      dispatch({
        type: 'NEW_HISTORICAL_DATA',
        data: finalResult,
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
    dispatch({
      type: 'LOADING_STOP'
    });
  }
}