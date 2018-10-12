import { NEW_HISTORICAL_DATA, SHOW_GRAPH, BUILD_GRAPH, CLOSE_HISTORICAL_MODAL } from './actions';

export const INITIAL_STATE = {
  modalStage: 'CLOSED',
  modalData: [],
  chartPoints: {},
};

export const HistoricalGraphModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUILD_GRAPH:
      return {
        ...state,
        modalStage: 'BUILDING',
        chartPoints: action.data,
      };
    case SHOW_GRAPH:
      return { ...state, modalStage: 'SHOWN' };
    case CLOSE_HISTORICAL_MODAL:
      return { ...state, modalStage: 'CLOSED' };
    case NEW_HISTORICAL_DATA:
      return { ...state, modalData: action.data };
    default:
      return state;
  }
};
