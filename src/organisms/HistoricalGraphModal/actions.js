export const NEW_HISTORICAL_DATA = 'NEW_HISTORICAL_DATA';
export const SHOW_GRAPH = 'SHOW_HISTORICAL_MODAL';
export const BUILD_GRAPH = 'BUILD_GRAPH';
export const buildGraph = () => ({
  type: BUILD_GRAPH,
});

export const dispatchNewHistoricalData = formattedGraphDataArray => ({
  type: NEW_HISTORICAL_DATA,
  data: formattedGraphDataArray,
});

export const ShowHistoryModal = () => ({
  type: SHOW_GRAPH,
});

export const closeHistoryModal = () => ({
  type: 'HIDE_HISTORICAL_MODAL',
});
