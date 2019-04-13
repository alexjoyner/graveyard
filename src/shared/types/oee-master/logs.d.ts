import { PointID } from './points';
export interface Log {
  pointID: PointID,
  log: {
    value: number
  }
}

export interface LogCallback {
  (error: Error | null, log: Log): void,
}