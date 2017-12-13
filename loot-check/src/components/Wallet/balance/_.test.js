import * as actions from './actions';
import {SET_BALANCE} from "./types";
import {DEPOSIT} from "./types";
import {WITHDRAW} from "./types";
import balanceReducer from './reducer';

describe('balance actions', () => {
    it('creates an action to set balance', () => {
        const balance = 0;
        const expectedAction = {type: SET_BALANCE, balance};
        expect(actions.setBalance(balance)).toEqual(expectedAction);
    });
    it('creates an actions to deposit the balance', () => {
        const deposit = 10;
        const expectedAction = {type: DEPOSIT, deposit};
        expect(actions.deposit(deposit)).toEqual(expectedAction);
    });
    it('creates an action to withdraw from balance', () => {
        const withdrawal = 15;
        const expectedAction =  {type: WITHDRAW, withdrawal};
        expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
    });
});

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