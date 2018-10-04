import { cfm } from './sensorOpts/cfm';
import { temp } from './sensorOpts/temp';
import { psi } from './sensorOpts/psi';
import { amps } from './sensorOpts/amps';
import { vibration } from './sensorOpts/vibration';
import { NEW_LOG, REMOVE_POINTS, MULTISELECT_POINT, MULTISELECT_DESELECT_POINT } from './actions/types';

const INITIAL_STATE = {
  points: [1, 2, 3],
  inputs: {},
  cfm,
  temp,
  amps,
  psi,
  vibration,
};


export const GaugeBlockArrayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_LOG:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.data.pointID]: {
            ...action.data.log,
            multiSelected: false,
          },
        },
      };
    case REMOVE_POINTS:
      return { ...state, inputs: [] };
    /* Please not that the following multiselect cases are currently only for
    the purposes of visual changes on the point gauge. Adding the point to the multi-select
    menu is handled in the multi select menu organism. */
    case MULTISELECT_POINT:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.data.id]: {
            ...state.inputs[action.data.id],
            multiSelected: true,
          },
        },
      };
    case MULTISELECT_DESELECT_POINT:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.data]: {
            ...state.inputs[action.data],
            multiSelected: false,
          },
        },
      };
    default:
      return state;
  }
};
