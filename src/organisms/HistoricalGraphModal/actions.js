export const NEW_HISTORICAL_DATA = 'NEW_HISTORICAL_DATA';
export const SHOW_HISTORICAL_MODAL = 'SHOW_HISTORICAL_MODAL';

export const dispatchNewHistoricalData = formattedGraphDataArray => (dispatch) => {
  dispatch({
    type: NEW_HISTORICAL_DATA,
    data: formattedGraphDataArray,
  });
};

export const ShowHistoryModal = () => (dispatch) => {
  dispatch({
    type: SHOW_HISTORICAL_MODAL,
  });
};
