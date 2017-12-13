import {DEPOSIT, SET_BALANCE, WITHDRAW} from "../ducks/constants";

const balance = (state = 0, action) => {
    switch(action.type){
        case SET_BALANCE:
            return action.balance;
        case DEPOSIT:
            return state + action.deposit;
        case WITHDRAW:
            return state - action.withdrawal;
        default:
            return state
    }
};
export default balance;