export interface Point {
  id: number,
  name: string,
}
export type PointID = number;

export interface PointsObject {
  [key: string]: Point
}
