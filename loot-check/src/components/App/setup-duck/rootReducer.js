import {combineReducers} from 'redux';
import {balance} from "../../Wallet/balance/reducer"
import {bitcoin} from "../../Wallet/bitcoin/reducer";

export const rootReducer = combineReducers({
    balance,
    bitcoin
});