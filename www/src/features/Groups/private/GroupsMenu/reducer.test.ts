// import { GroupsMenuReducer, INITIAL_STATE as TRUE_INITIAL_STATE } from './reducer';
// import { SET_GROUPS } from './actions';

// describe('GroupsMenuReducer', () => {
//   let InitialState;
//   beforeEach(() => {
//     InitialState = {
//       groups: [],
//     };
//   });
//   it('should return initial state', () => {
//     const state = GroupsMenuReducer(InitialState, {});
//     expect(state).toEqual(InitialState);
//   });
//   it('should return true initial state', () => {
//     const state = GroupsMenuReducer(undefined, {});
//     expect(state).toEqual(TRUE_INITIAL_STATE);
//   });
//   it('should allow setting groups', () => {
//     const state = GroupsMenuReducer(InitialState, {
//       type: SET_GROUPS,
//       data: [{ id: 1, name: 'test group' }],
//     });
//     expect(state).toEqual({
//       ...InitialState,
//       groups: [
//         { id: 0, name: 'All Points' },
//         { id: 1, name: 'test group' },
//       ],
//     });
//   });
// });
