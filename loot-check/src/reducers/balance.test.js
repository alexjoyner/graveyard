import balanceReducer from './balance';
import {SET_BALANCE} from "../actions/constants";

describe('balance reducer', () => {
   it('sets a balance', () => {
       const balance = 10;


       expect(balanceReducer(undefined, {
           type: SET_BALANCE,
           balance
       })).toEqual(balance);
   })
});