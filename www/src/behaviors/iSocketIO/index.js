import io from 'socket.io-client';
import { env } from '../../.env';

export class ISocketIO {
  constructor() {
    if (this.subscribe === undefined) { throw new TypeError('Must override method'); }
    if (this.unsubscribe === undefined) { throw new TypeError('Must override method'); }
    if (this.join === undefined) { throw new TypeError('Must override method'); }
  }
}

class PointsSocket extends ISocketIO {
  constructor(opts) {
    super();
    this.socket = opts.socket || /* istanbul ignore next */ io(env.serverAddr);
  }

  subscribe(pointsArray, cb) {
    this.points = pointsArray;
    this.socket.on('add log', /* istanbul ignore next */ (log) => {
      cb(null, log);
    });
    this.join();
    this.getLastLogs();
  }

  unsubscribe() {
    this.socket.emit('leave-group', this.points);
  }

  join() {
    this.socket.emit('join-group', this.points);
  }

  getLastLogs() {
    this.socket.emit('get-last-logs', this.points);
  }

  setPoints(pointsArray) {
    this.points = pointsArray;
  }

  getPoints() {
    return this.points;
  }
}

export { PointsSocket };
