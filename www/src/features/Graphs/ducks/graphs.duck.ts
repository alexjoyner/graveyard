import { PointsObject } from './../../../shared/types/oee-master/points.d';
import { Reducer } from 'redux';

export const BUILD_GRAPH = 'BUILD_GRAPH';
export const CLOSE_GRAPH = 'CLOSE_GRAPH';

const INITIAL_STATE = {
  graphPoints: {},
};

export const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '__INIT__':
      return INITIAL_STATE;
    case BUILD_GRAPH:
      return { ...state, graphPoints: action.data };
    case CLOSE_GRAPH:
      return { ...state, graphPoints: {} };
    default:
      return state;
  }
};

export const buildGraph = (graphPoints: PointsObject) => ({
  type: BUILD_GRAPH,
  data: graphPoints,
});

export const closeGraph = () => ({
  type: CLOSE_GRAPH,
});