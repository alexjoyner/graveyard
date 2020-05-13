import { GaugeSettings } from '../../../features/Gauges/types/gauges';
export interface Point {
  settings: GaugeSettings;
  id: number,
  name: string,
  data?: [[number, number]]
}
export type PointID = number | string;

export interface PointsObject {
  [key: string]: Point
}
