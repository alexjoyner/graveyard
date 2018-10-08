import { NEW_LOG, REMOVE_POINTS, MULTISELECT_POINT, MULTISELECT_DESELECT_POINT, NEW_POINTS } from './actions/types';
import { CHANGE_GROUP } from '../SideBarContent/actions';

const INITIAL_STATE = {
  currentGroup: 0,
  inputs: {},
};


export const GaugeBlockArrayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_GROUP:
      return { ...state, currentGroup: action.data };
    case NEW_POINTS:
      return {
        ...state,
        inputs: action.data,
      };
    case NEW_LOG:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.data.pointID]: {
            ...state.inputs[action.data.pointID],
            value: action.data.log.value,
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
