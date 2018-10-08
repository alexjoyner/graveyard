import { NEW_HISTORICAL_DATA, SHOW_GRAPH, BUILD_GRAPH } from './actions';

const INITIAL_STATE = {
  modalStage: 'hidden',
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
    case 'LOADING_HISTORICAL_DATA':
      return { ...state, modalStage: 'LOADING' };
    case SHOW_GRAPH:
      return { ...state, modalStage: 'SHOWN' };
    case 'HIDE_HISTORICAL_MODAL':
      return { ...state, modalStage: 'HIDDEN' };
    case NEW_HISTORICAL_DATA:
      return { ...state, modalData: action.data };
    default:
      return state;
  }
};
