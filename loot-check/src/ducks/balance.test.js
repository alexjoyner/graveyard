import * as actions from './balance';
import {DEPOSIT, SET_BALANCE, WITHDRAW} from "./constants";

it('creates an action to set balance', () => {
   const balance = 0;
   const expectedAction = {type: SET_BALANCE, balance};

   expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an actions to deposit the balance', () => {
    const deposit = 10;
    const expectedAction = {
        type: DEPOSIT,
        deposit
    };
    expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('creates an action to withdraw from balance', () => {
    const withdrawal = 15;
    const expectedAction =  {
        type: WITHDRAW,
        withdrawal
    };
    expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
});