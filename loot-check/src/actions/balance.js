import {SET_BALANCE} from "./constants";

const setBalance = balance => {
    return {
        type: SET_BALANCE,
        balance
    }
};


export {setBalance};