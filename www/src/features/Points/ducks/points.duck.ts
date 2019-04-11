import { Point, PointsObject } from './../../../shared/types/oee-master/points.d';
import { Reducer } from 'redux';
// import { Point, PointID } from './../../../shared/types/interfaces/points.d';
// import { Log } from './../../../shared/types/interfaces/logs.d';
// import { Reducer } from 'redux';
// import _ from 'lodash';
import { toaster } from 'ro-component-library/Toast';
// import { InitialGaugesStateInterface } from '../types/gauges';
interface InitialPointsStateInterface {
  selectedPoints: PointsObject
}
// export const NEW_LOG = 'NEW_LOG';
// export const NEW_POINTS = 'NEW_POINTS';
// export const REMOVE_POINTS = 'REMOVE_POINTS';
export const SELECT_POINT = 'MULTISELECT_POINT';
export const DESELECT_POINT = 'MULTISELECT_DESELECT_POINT';
// export const REMOVE_POINT = 'REMOVE_POINT';

export const INITIAL_STATE: InitialPointsStateInterface = {
  selectedPoints: {},
};


export const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '__INIT__':
      return INITIAL_STATE;
    case SELECT_POINT:
      if (state.selectedPoints[action.data.id]) {
        toaster().warning('You already selected that point! :)', {
          autoHideDuration: 5000,
        });
      }
      return {
        ...state,
        selectedPoints: {
          ...state.selectedPoints,
          [action.data.id]: {
            ...action.data,
          },
        },
      };
    case DESELECT_POINT:
      console.log(`${DESELECT_POINT} `, action)
      return { ...state };
    default:
      return state;
  }
}
// export const ChartsSelectedReducer:Reducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case MULTISELECT_POINT: {
//       const { id } = action.data.point;
//       let alreadyAdded = false;
//       if (state.multiSelectedPoints[id]) {
//         alreadyAdded = true;
//         toaster().warning('You already selected that point! :)', {
//           autoHideDuration: 5000,
//         });
//       }
//       if (alreadyAdded) { return state; }
//       return {
//         ...state,
//         multiSelectedPoints: {
//           ...state.multiSelectedPoints,
//           [action.data.point.id]: {
//             ...action.data.point,
//           },
//         },
//       };
//     }
//     case REMOVE_POINT: {
//       const newState = _.cloneDeep(state);
//       delete newState.multiSelectedPoints[action.data];
//       return newState;
//     }
//     default:
//       return state;
//   }
// };


// export const publishNewPoints = (points:PointID[]) => ({
//   type: NEW_POINTS,
//   data: points,
// });

// export const publishNewLog = (log:Log) => ({
//   type: NEW_LOG,
//   data: log,
// });

// export const removeAllPoints = () => ({
//   type: REMOVE_POINTS,
// });

// export const removePoint = (point:Point) => ({
//   type: REMOVE_POINT,
//   data: point,
// });

export const selectPoint = (point: Point) => ({
  type: SELECT_POINT,
  data: point,
});

export const deselectPoint = (point: Point) => ({
  type: DESELECT_POINT,
  data: point,
});