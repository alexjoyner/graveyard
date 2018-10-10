import { changePointGroup, CHANGE_GROUP } from './actions';

describe('SideBarContent actions', () => {
  describe('changePointGroup', () => {
    it('should return correct action', () => {
      expect(changePointGroup(2)).toEqual({
        type: CHANGE_GROUP,
        data: 2,
      });
    });
  });
});

