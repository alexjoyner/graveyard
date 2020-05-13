import {rootReducer} from './rootReducer';
import balance from "../../Wallet/balance/reducer";

describe('rootReducer', () => {
   it('initializes the default state', () => {
       expect(rootReducer({}, {})).toEqual({balance: 0, bitcoin: {}});
   })
});
