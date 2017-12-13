import balanceReducer from './balance';
import {DEPOSIT, SET_BALANCE, WITHDRAW} from "../ducks/constants";

describe('balance reducer', () => {
    it('sets a balance', () => {
        const balance = 10;
        expect(balanceReducer(undefined, {
            type: SET_BALANCE,
            balance
        })).toEqual(balance);
    });
    it('deposits into balance', () => {
        const deposit = 10;
        const initialState = 5;
        expect(balanceReducer(initialState, {type: DEPOSIT, deposit}))
            .toEqual(initialState + deposit);
    });
    it('withdraws from balance', () => {
        const withdrawal = 20;
        const initialState = 50;
        expect(balanceReducer(initialState, {type: WITHDRAW, withdrawal}))
            .toEqual(initialState - withdrawal);
    })
});