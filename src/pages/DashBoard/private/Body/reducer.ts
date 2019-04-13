// import {
//   NEW_LOG, REMOVE_POINTS, MULTISELECT_POINT, MULTISELECT_DESELECT_POINT, NEW_POINTS,
// } from './actions/types';
// import { CHANGE_GROUP } from '../../molecules/GroupsMenu/actions';

// export const INITIAL_STATE = {
//   currentGroup: 0,
//   points: {},
// };


// export const DashBodyReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case CHANGE_GROUP:
//       return { ...state, currentGroup: action.data };
//     case NEW_POINTS:
//       return {
//         ...state,
//         points: action.data,
//       };
//     case NEW_LOG:
//       return {
//         ...state,
//         points: {
//           ...state.points,
//           [action.data.pointID]: {
//             ...state.points[action.data.pointID],
//             value: action.data.log.value,
//             multiSelected: false,
//           },
//         },
//       };
//     case REMOVE_POINTS:
//       return { ...state, points: {} };
//     /* Please not that the following multiselect cases are currently only for
//     the purposes of visual changes on the point gauge. Adding the point to the multi-select
//     menu is handled in the multi select menu organism. */
//     case MULTISELECT_POINT:
//       return {
//         ...state,
//         points: {
//           ...state.points,
//           [action.data.id]: {
//             ...state.points[action.data.id],
//             multiSelected: true,
//           },
//         },
//       };
//     case MULTISELECT_DESELECT_POINT:
//       return {
//         ...state,
//         points: {
//           ...state.points,
//           [action.data.id]: {
//             ...state.points[action.data.id],
//             multiSelected: false,
//           },
//         },
//       };
//     default:
//       return state;
//   }
// };
