import {SET_BALANCE} from "../actions/constants";

const balance = (state = 0, action) => {
    switch(action.type){
        case SET_BALANCE:
            return action.balance;
        default:
            return state
    }
};
export default balance;