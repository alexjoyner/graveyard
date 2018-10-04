const INITIAL_STATE = {
  groups: [],
};

export const SideBarContentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INIT_GROUPS':
      return { ...state, groups: action.data };
    default:
      return state;
  }
};
