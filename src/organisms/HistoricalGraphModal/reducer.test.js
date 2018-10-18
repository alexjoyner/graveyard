import { HistoricalGraphModalReducer, INITIAL_STATE as TRUE_INITIAL_STATE } from './reducer';
import {
  BUILD_GRAPH, SHOW_GRAPH, CLOSE_HISTORICAL_MODAL, NEW_HISTORICAL_DATA,
} from './actions';

describe('HistoricalGraphModalReducer', () => {
  let InitialState;
  beforeEach(() => {
    InitialState = {
      modalStage: 'CLOSED',
      modalData: [],
      chartPoints: {},
    };
  });
  it('should return true initial state', () => {
    const state = HistoricalGraphModalReducer(undefined, {});
    expect(state).toEqual(TRUE_INITIAL_STATE);
  });
  it('should return default state', () => {
    const state = HistoricalGraphModalReducer(InitialState, {});
    expect(state).toEqual(InitialState);
  });
  it('should allow build graph', () => {
    const state = HistoricalGraphModalReducer(InitialState, {
      type: BUILD_GRAPH,
      data: { 1: { name: 'test' } },
    });
    expect(state).toEqual({
      ...InitialState,
      modalStage: 'BUILDING',
      chartPoints: { 1: { name: 'test' } },
    });
  });
  it('should allow showing the graph modal', () => {
    const state = HistoricalGraphModalReducer(InitialState, {
      type: SHOW_GRAPH,
    });
    expect(state).toEqual({
      ...InitialState,
      modalStage: 'SHOWN',
    });
  });
  it('should allow closing the graph modal', () => {
    const state = HistoricalGraphModalReducer(InitialState, {
      type: CLOSE_HISTORICAL_MODAL,
    });
    expect(state).toEqual({
      ...InitialState,
      modalStage: 'CLOSED',
    });
  });
  it('should accept new historical data', () => {
    const state = HistoricalGraphModalReducer(InitialState, {
      type: NEW_HISTORICAL_DATA,
      data: ['TESTING'],
    });
    expect(state).toEqual({
      ...InitialState,
      modalData: ['TESTING'],
    });
  });
});
