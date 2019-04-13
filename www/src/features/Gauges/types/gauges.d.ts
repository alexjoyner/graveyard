import { number } from 'prop-types';

// import { Point } from './../../../shared/types/interfaces/points.d';
// export interface InitialGaugesStateInterface {
//     multiSelectedPoints: {
//         [key: number]: Point
//     },
// }

type Range = {
  lowerValue: number,
  upperValue: number,
  color: 'success' | 'warning' | 'danger',
  alertLevel: 'success' | 'warning' | 'danger',
}

export interface GaugeSettings {
  max: number,
  min: number,
  ranges: Range[],
  units: string,
}