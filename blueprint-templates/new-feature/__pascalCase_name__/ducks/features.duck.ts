// import { Reducer } from 'redux';

// export const SET_FEATURE = 'SET_FEATURE'

// const rawStoredFeatures = localStorage.getItem('Features');
// export const INITIAL_STATE = (rawStoredFeatures) ? JSON.parse(rawStoredFeatures) : {
//   Accounts: true,
//   Feedback: true,
//   Tutorial: true,
//   Gauges: true,
//   Points: true,
//   Groups: true,
//   Graphs: true,
//   Features: true,
// };

// export const reducer: Reducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case '__INIT__':
//       return INITIAL_STATE;
//     case SET_FEATURE:
//       return { ...state, [action.data.name]: action.data.enabled };
//     default:
//       return state;
//   }
// }
