import _ from 'lodash';
import { toaster } from 'ro-component-library/Toast';

export const NEW_LOG = 'NEW_LOG';
export const NEW_POINTS = 'NEW_POINTS';
export const REMOVE_POINTS = 'REMOVE_POINTS';
export const MULTISELECT_POINT = 'MULTISELECT_POINT';
export const MULTISELECT_DESELECT_POINT = 'MULTISELECT_DESELECT_POINT';
export const REMOVE_POINT = 'REMOVE_POINT';

export const INITIAL_STATE = {
  multiSelectedPoints: {},
};

export const ChartsSelectedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MULTISELECT_POINT: {
      const { id } = action.data.point;
      let alreadyAdded = false;
      if (state.multiSelectedPoints[id]) {
        alreadyAdded = true;
        toaster().warning('You already selected that point! :)', {
          autoHideDuration: 5000,
        });
      }
      if (alreadyAdded) { return state; }
      return {
        ...state,
        multiSelectedPoints: {
          ...state.multiSelectedPoints,
          [action.data.point.id]: {
            ...action.data.point,
          },
        },
      };
    }
    case REMOVE_POINT: {
      const newState = _.cloneDeep(state);
      delete newState.multiSelectedPoints[action.data];
      return newState;
    }
    default:
      return state;
  }
};


export const publishNewPoints = points => ({
  type: NEW_POINTS,
  data: points,
});

export const publishNewLog = log => ({
  type: NEW_LOG,
  data: log,
});

export const removeAllPoints = () => ({
  type: REMOVE_POINTS,
});

export const removePoint = point => ({
  type: REMOVE_POINT,
  data: point,
});

export const multiSelectPoint = (point, id) => ({
  type: MULTISELECT_POINT,
  data: { point, id },
});

export const multiDeselectPoint = id => ({
  type: MULTISELECT_DESELECT_POINT,
  data: { id },
});