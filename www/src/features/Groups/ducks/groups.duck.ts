import { Reducer } from 'redux';

export const CHANGE_GROUP = 'CHANGE_GROUP';

const INITIAL_STATE = {
  currentGroup: 0,
};

export const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '__INIT__':
      return INITIAL_STATE;
    case CHANGE_GROUP: {
      return { ...state, currentGroup: action.data };
    }
    default:
      return state;
  }
};


export const changeGroup = (groupID: number) => ({
  type: CHANGE_GROUP,
  data: groupID,
});
