import {DEPOSIT, SET_BALANCE, WITHDRAW} from "./constants";


//actions
export const setBalance = balance => {
    return {type: SET_BALANCE, balance}
};
export const deposit = deposit => {
  return {type: DEPOSIT, deposit}
};
export const withdraw = withdrawal => {
    return {type: WITHDRAW, withdrawal}
};
