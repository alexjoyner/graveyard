const INITIAL_STATE = {
  groups: [],
};

export const SideBarContentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INIT_GROUPS': {
      const baseGroup = [{ id: 0, name: 'All Points' }];
      return { ...state, groups: baseGroup.concat(action.data) };
    }
    default:
      return state;
  }
};
