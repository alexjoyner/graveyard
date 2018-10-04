import moment from 'moment';
import { env } from '../../.env';
import { showNotification, START_LOADING, startLoadingNotif, stopLoadingNotif } from '../../actions/notification';
import { TEST_NOTIFICATION } from '../Notifications';

export const buildNewHistoryGraph = (requests, opts) => {
  return async (dispatch) => {
    if (requests.length === 0)
      return showNotification(TEST_NOTIFICATION, 'Please add at least one graph')(dispatch); 
    startLoadingNotif(TEST_NOTIFICATION)(dispatch);
    const calls = getRequestFetchUrls(requests, opts);
    const rawDataArray = await getRawHistoryData(calls)(dispatch);
    const formattedData = formatDataForGraph(rawDataArray, requests);
    dispatchNewHistoricalData(formattedData)(dispatch);
    ShowHistoryModal()(dispatch);
    stopLoadingNotif(TEST_NOTIFICATION)(dispatch);
  }
}

export const getRawHistoryData = (calls) => {
  return async (dispatch) => {
    try {
      let responses = await Promise.all(calls);
      let jsonCalls = responses.map((response) => response.json());
      let rawData = await Promise.all(jsonCalls);
      return rawData; 
    }
    catch (e) {
      console.error(e);
    }
  }

}
const getRequestFetchUrls = (requests, opts) => {
  const calls = requests.map((request) => {
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
  return calls;
}
const formatDataForGraph = (rawDataArray, requests) => {
  return rawDataArray.map((data, i) => {
    return {
      source: {
        id: requests[i].source.id,
        inputname: requests[i].source.name,
        unit: requests[i].source.unit
      },
      data
    }
  })
}
export const dispatchNewHistoricalData = (formattedGraphDataArray) => {
  return (dispatch) => {
    dispatch({
      type: 'NEW_HISTORICAL_DATA',
      data: formattedGraphDataArray,
    });
  }
}

export const ShowHistoryModal = () => {
  return (dispatch) => {
    dispatch({
      type: 'SHOW_HISTORICAL_MODAL'
    });
  }
}