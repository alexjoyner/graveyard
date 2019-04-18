import { Log } from './../../types/oee-master/logs.d';
import { PointID } from './../../types/oee-master/points.d';
export interface SocketObserverable {
  subscribe(pointID: PointID, o: SocketObserver): void;
  unsubscribe(o: SocketObserver, success: (room: string) => void): void;
}
export interface SocketObserver {
  (log: Log): void;
}
