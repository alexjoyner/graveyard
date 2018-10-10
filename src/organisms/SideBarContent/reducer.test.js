import { SideBarContentReducer } from './reducer';
import { INIT_GROUPS } from './actions';

describe('SideBarContentReducer', () => {
  let InitialState;
  beforeEach(() => {
    InitialState = {
      groups: [],
    };
  });
  it('should return initial state', () => {
    const state = SideBarContentReducer(InitialState, {});
    expect(state).toEqual(InitialState);
  });
  it('should allow initializing groups', () => {
    const state = SideBarContentReducer(InitialState, {
      type: INIT_GROUPS,
      data: [{ id: 1, name: 'test group' }],
    });
    expect(state).toEqual({
      ...InitialState,
      groups: [
        { id: 0, name: 'All Points' },
        { id: 1, name: 'test group' },
      ],
    });
  });
});

