import {cfm, temp, amps, psi} from "./sensorOpts";

const INITIAL_STATE = {
    defaultOpts: {
        cfm, temp, amps, psi
    }
}


export const GaugeBlockArrayReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}