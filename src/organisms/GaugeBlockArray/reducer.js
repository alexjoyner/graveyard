import {cfm, temp, amps, psi} from "./sensorOpts";

const INITIAL_STATE = {
  inputs: {},
  cfm, temp, amps, psi
}


export const GaugeBlockArrayReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'NEW_INPUTS':
      return {...state, inputs: action.data.inputs}
    case 'MULTISELECT_INPUT':
      return {...state, inputs: {
        ...state.inputs,
        [action.data.key]: {
          ...state.inputs[action.data.key],
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