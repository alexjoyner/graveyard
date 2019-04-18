// import { Log, LogCallback } from '../../types/interfaces/logs';
// import { SocketInterface } from '../../types/interfaces/SocketInterface.d';
// import io from 'socket.io-client';
// import { env } from '../../.env';

// class PointsSocket implements SocketInterface{
//   private points:number[];
//   private socket:SocketIOClient.Emitter;
//   constructor() {
//     this.points = [];
//     this.socket = io(env.serverAddr);
//   }
//   subscribe(pointsArray:number[], cb:LogCallback) {
//     this.points = pointsArray;
//     this.socket.on('add log', /* istanbul ignore next */ (log:Log) => {
//       cb(null, log);
//     });
//     this.join();
//     this.getLastLogs();
//   }

//   unsubscribe() {
//     if (this.points.length > 0) {
//       this.socket.emit('leave-group', this.points);
//     }
//   }

//   join() {
//     this.socket.emit('join-group', this.points);
//   }

//   getLastLogs() {
//     this.socket.emit('get-last-logs', this.points);
//   }

//   setPoints(pointsArray:number[]) {
//     this.points = pointsArray;
//   }

//   getPoints() {
//     return this.points;
//   }
// }

// export { PointsSocket };
export const test = 1;
