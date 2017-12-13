// https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_BITCOIN } from './types';
import { fetchBitcoin } from './actions';
import {bitcoin as bitcoinReducer} from './reducer';

describe('bitcoin actions', () => {

});
const createMockStore = configureMockStore([thunk]);
const store = createMockStore({bitcoin: {}});
const mockResponse = {body: {bpi: 'bitcoin price index'}};

fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse);

it('creates an async action to fetch the bitcoin value', () => {
    const expectedActions = [{bitcoin: mockResponse.body, type: FETCH_BITCOIN}];
    return store.dispatch(fetchBitcoin()).then(() => {
       expect(store.getActions()).toEqual(expectedActions);
    });
});

describe('bitcoinReducer', () => {
   const bitcoinData = {bpi: 'bitcoin price index'};
   it('fetches and sets the bitcoin data', () => {
      expect(bitcoinReducer({}, {type: FETCH_BITCOIN, bitcoin: bitcoinData}))
          .toEqual(bitcoinData);
   });
});

