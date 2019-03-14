export interface Log {
  pointID: number,
  value: number
}

export interface LogCallback {
  (error: Error | null, log: Log):void,
}