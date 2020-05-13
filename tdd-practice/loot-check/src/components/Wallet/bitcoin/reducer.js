import {FETCH_BITCOIN} from "./types";

export const bitcoin = (state = {}, action) => {
    switch(action.type){
        case FETCH_BITCOIN:
            return action.bitcoin;
        default:
            return state;
    }
};