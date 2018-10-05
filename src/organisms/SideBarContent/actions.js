export const CHANGE_GROUP = 'CHANGE_GROUP';

export const changePointGroup = groupID => ({
  type: CHANGE_GROUP,
  data: groupID,
});
