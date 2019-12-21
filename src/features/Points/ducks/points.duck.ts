import { Point, PointsObject } from '../../../shared/types/oee-master/points';
import { Reducer } from 'redux';
import _ from 'lodash';
import { toaster } from 'ro-component-library/Toast';

interface InitialPointsStateInterface {
  selectedPoints: PointsObject
}

export const SELECT_POINT = 'SELECT_POINT';
export const DESELECT_POINT = 'DESELECT_POINT';

export const INITIAL_STATE: InitialPointsStateInterface = {
  selectedPoints: {},
};


export const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '__INIT__':
      return INITIAL_STATE;
    case SELECT_POINT:
      if (state.selectedPoints[action.data.id]) {
        toaster().warning('You already selected that point! :)', {
          autoHideDuration: 5000,
        });
      }
      return {
        ...state,
        selectedPoints: {
          ...state.selectedPoints,
          [action.data.id]: {
            ...action.data,
          },
        },
      };
    case DESELECT_POINT:
      console.log('Deselect Point: ', action.data);
      const newState = _.cloneDeep(state);
      delete newState.selectedPoints[action.data.id];
      return newState;
    default:
      return state;
  }
}

export const selectPoint = (point: Point) => ({
  type: SELECT_POINT,
  data: point,
});

export const deselectPoint = (point: Point) => ({
  type: DESELECT_POINT,
  data: point,
});