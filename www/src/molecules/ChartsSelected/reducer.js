import _ from 'lodash';
import { toaster } from 'ro-component-library/Toast';
import { MULTISELECT_POINT } from '../../organisms/DashBody/actions/types';
import { REMOVE_POINT } from './actions';

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
