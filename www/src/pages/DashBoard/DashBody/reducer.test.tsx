// import { DashBodyReducer, INITIAL_STATE } from './reducer';
// import { CHANGE_GROUP } from '../../molecules/GroupsMenu/actions';
// import {
//   NEW_POINTS, REMOVE_POINTS, MULTISELECT_POINT, MULTISELECT_DESELECT_POINT, NEW_LOG,
// } from './actions/types';

// describe('DashBodyReducer', () => {
//   let InitialState;
//   beforeEach(() => {
//     InitialState = {
//       currentGroup: 0,
//       points: {
//         1: { name: 'Default Test Point' },
//       },
//     };
//   });
//   it('should return true initial state', () => {
//     const state = DashBodyReducer(undefined, {});
//     // Expect undefined state to return true default state
//     //   from app
//     expect(state).toEqual(INITIAL_STATE);
//   });
//   it('should return initial state', () => {
//     const state = DashBodyReducer(InitialState, {});
//     expect(state).toEqual(InitialState);
//   });
//   it('should allow change group', () => {
//     const state = DashBodyReducer(InitialState, {
//       type: CHANGE_GROUP,
//       data: 2,
//     });
//     expect(state).toEqual({
//       ...InitialState,
//       currentGroup: 2,
//     });
//   });
//   it('should allow new points', () => {
//     const state = DashBodyReducer(InitialState, {
//       type: NEW_POINTS,
//       data: {
//         15: { name: 'Test Point' },
//       },
//     });
//     expect(state).toEqual({
//       ...InitialState,
//       points: {
//         15: { name: 'Test Point' },
//       },
//     });
//   });
//   it('should allow new logs', () => {
//     const state = DashBodyReducer(InitialState, {
//       type: NEW_LOG,
//       data: {
//         pointID: 1,
//         log: { value: 20 },
//       },
//     });
//     expect(state).toEqual({
//       ...InitialState,
//       points: {
//         1: { name: 'Default Test Point', value: 20, multiSelected: false },
//       },
//     });
//   });
//   it('should allow removing all points', () => {
//     const state = DashBodyReducer(InitialState, {
//       type: REMOVE_POINTS,
//     });
//     expect(state).toEqual({
//       ...InitialState,
//       points: {},
//     });
//   });
//   it('should allow multiselect point', () => {
//     const state = DashBodyReducer(InitialState, {
//       type: MULTISELECT_POINT,
//       data: {
//         id: 1,
//       },
//     });
//     expect(state).toEqual({
//       ...InitialState,
//       points: { 1: { name: 'Default Test Point', multiSelected: true } },
//     });
//   });
//   it('should allow multiDeselect point', () => {
//     const state = DashBodyReducer(InitialState, {
//       type: MULTISELECT_DESELECT_POINT,
//       data: {
//         id: 1,
//       },
//     });
//     expect(state).toEqual({
//       ...InitialState,
//       points: { 1: { name: 'Default Test Point', multiSelected: false } },
//     });
//   });
// });
