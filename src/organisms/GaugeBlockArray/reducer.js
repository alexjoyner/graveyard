import {cfm, temp, amps, psi, vibration} from "./sensorOpts";

const INITIAL_STATE = {
  points: [1,2,3],
  inputs: {},
  cfm, temp, amps, psi, vibration
}


export const GaugeBlockArrayReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'NEW_LOG':
      const newState = {...state, inputs: {
        ...state.inputs,
        [action.data.pointID]: {
          ...action.data.log,
          multiSelected: false
        }
      }};
      console.log(newState);
      return newState;
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