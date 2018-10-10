import { MultiSelectedChartsMenuReducer } from './reducer';
import { MULTISELECT_POINT } from '../GaugeBlockArray/actions/types';
import { REMOVE_POINT } from './actions';

describe('MultiSelectedChartsMenuReducer', () => {
  let InitialState;
  beforeEach(() => {
    InitialState = {
      multiSelectedPoints: {
        1: { id: 1, name: 'Test' },
      },
    };
  });
  it('should return initial state', () => {
    const state = MultiSelectedChartsMenuReducer(InitialState, {});
    expect(state).toEqual(InitialState);
  });
  it('should allow selecting a point', () => {
    const state = MultiSelectedChartsMenuReducer(InitialState, {
      type: MULTISELECT_POINT,
      data: {
        point: { id: 2, name: 'Test' },
      },
    });
    expect(state).toEqual({
      ...InitialState,
      multiSelectedPoints: {
        1: { id: 1, name: 'Test' },
        2: { id: 2, name: 'Test' },
      },
    });
  });
  it('shouldnt allow selecting a point twice', () => {
    const state = MultiSelectedChartsMenuReducer(InitialState, {
      type: MULTISELECT_POINT,
      data: {
        point: { id: 1, name: 'Test' },
      },
    });
    expect(state).toEqual({
      ...InitialState,
      multiSelectedPoints: {
        1: { id: 1, name: 'Test' },
      },
    });
  });
  it('should allow removing a point', () => {
    const state = MultiSelectedChartsMenuReducer(InitialState, {
      type: REMOVE_POINT,
      data: 1,
    });
    expect(state).toEqual({
      ...InitialState,
      multiSelectedPoints: {},
    });
  });
});
