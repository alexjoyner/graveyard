import { SET_GROUPS } from './actions';

export const INITIAL_STATE = {
  groups: [],
};

export const GroupsMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GROUPS: {
      const baseGroup = [{ id: 0, name: 'All Points' }];
      return { ...state, groups: baseGroup.concat(action.data) };
    }
    default:
      return state;
  }
};
