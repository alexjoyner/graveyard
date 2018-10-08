import { showNotification, startLoadingNotif, stopLoadingNotif } from '../../../../actions/notification';
import { getRequestFetchUrls } from '../getRequestFetchUrls';
import { getRawHistoryData } from '../getRawHistoryData';
import { formatDataForGraph } from '../formatDataForGraph';
import { dispatchNewHistoricalData, ShowHistoryModal } from '../../actions';
import { TEST_NOTIFICATION } from '../../../Notifications';

export const buildHistoryGraph = (requests, opts) => async (dispatch) => {
  if (requests.length === 0) { return showNotification(TEST_NOTIFICATION, 'Please add at least one graph')(dispatch); }
  startLoadingNotif(TEST_NOTIFICATION)(dispatch);
  const calls = getRequestFetchUrls(requests, opts);
  const rawDataArray = await getRawHistoryData(calls)(dispatch);
  const formattedData = formatDataForGraph(rawDataArray, requests);
  dispatchNewHistoricalData(formattedData)(dispatch);
  ShowHistoryModal()(dispatch);
  stopLoadingNotif(TEST_NOTIFICATION)(dispatch);
  return null;
};
