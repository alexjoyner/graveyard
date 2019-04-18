import { Reducer } from 'redux';

export const CHANGE_GROUP = 'CHANGE_GROUP';

const INITIAL_STATE = {
  currentGroup: {
    name: 'All Points',
    id: 0
  },
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


type Group = {
  id: number,
  name: string,
}
export const changeGroup = (group: Group) => ({
  type: CHANGE_GROUP,
  data: group,
});
