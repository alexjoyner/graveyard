import {cfm, temp, amps, psi} from "./sensorOpts";

const INITIAL_STATE = {
  inputs: {},
  cfm, temp, amps, psi
}


export const GaugeBlockArrayReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'NEW_INPUTS':
      return {...state, inputs: action.data.inputs}
    default:
      return state;
  }
}