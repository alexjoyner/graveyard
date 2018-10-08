import _ from 'lodash';
import { MULTISELECT_POINT } from '../GaugeBlockArray/actions/types';
import { REMOVE_POINT } from './actions';

const INITIAL_STATE = {
  multiSelectedPoints: {},
};

export const MultiSelectedChartsMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MULTISELECT_POINT: {
      const { id } = action.data.point;
      let alreadyAdded = false;
      if (state.multiSelectedPoints[id]) {
        alreadyAdded = true;
        console.log('Already selected that point');
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
