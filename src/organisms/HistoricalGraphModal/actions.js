import moment from 'moment';
import { env } from '../../.env';

export const GetNewHistoryGraph = (opts) => {
  return async (dispatch) => {
    ShowHistoryGraphLoading()(dispatch);
    await GetNewHistoryData(opts)(dispatch);
    ShowHistoryModal()(dispatch);
  }
}

export const ShowHistoryGraphLoading = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOADING_HISTORICAL_DATA'
    });
  }
}

export const GetNewHistoryData = (opts) => {
  const baseStart = '2017-12-18';
  const baseEnd = '2017-12-24';
  const start = opts.startDate || baseStart;
  const end = opts.endDate || baseEnd;
  const input = opts.input || '1';
  return async (dispatch) => {
    try {
      const requestUrl = new Request(`${env.serverAddr}/history/AAE599/romeo6424/?input=${input}&from=${start}&to=${end}`);
      const response = await fetch(requestUrl);
      const myJson = await response.json();
      myJson.data = myJson.data.map((point) => {
        return [(new Date(point.time)).getTime(), point.value]
      });
      dispatch({
        type: 'NEW_HISTORICAL_DATA',
        data: myJson
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