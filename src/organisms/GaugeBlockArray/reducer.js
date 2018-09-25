import {cfm, temp, amps, psi, vibration} from "./sensorOpts";

const INITIAL_STATE = {
  points: [1,2,3],
  inputs: {},
  cfm, temp, amps, psi, vibration
}


export const GaugeBlockArrayReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'NEW_LOG':
      return {...state, inputs: {
        ...state.inputs,
        [action.data.pointID]: {
          ...action.data.log,
          multiSelected: false
        }
      }};
    case 'REMOVE_POINTS':
      return {...state, inputs: []};
    case 'MULTISELECT_INPUT':
      return {...state, inputs: {
        ...state.inputs,
        [action.data.id]: {
          ...state.inputs[action.data.id],
          multiSelected: true
        }
      }};
    case 'MULTISELECT_DESELECT_INPUT':
      return {...state, inputs: {
        ...state.inputs,
        [action.data]: {
          ...state.inputs[action.data],
          multiSelected: false
        }
      }};
    default:
      return state;
  }
}