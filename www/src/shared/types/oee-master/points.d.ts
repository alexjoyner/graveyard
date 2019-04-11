import { GaugeSettings } from './../../../features/Gauges/types/gauges.d';
export interface Point {
  settings: GaugeSettings;
  id: number,
  name: string,
}
export type PointID = number | string;

export interface PointsObject {
  [key: string]: Point
}
