import io from 'socket.io-client';
import { env } from '../../.env';

class iSocketIO {
  constructor() {
    if (this.subscribe === undefined) { throw new TypeError('Must override method'); }
    if (this.unsubscribe === undefined) { throw new TypeError('Must override method'); }
    if (this.join === undefined) { throw new TypeError('Must override method'); }
  }
}

class PointsSocket extends iSocketIO {
  constructor(opts) {
    super();
    this.socket = opts.socket || io(env.serverAddr);
  }
  subscribe(pointsArray, cb) {
    this.points = pointsArray;
    this.join();
    this.socket.on('add log', (log) => {
      cb(null, log);
    });
  }
  unsubscribe() {
    this.socket.emit('leave-group', this.points);
  }
  join() {
    this.socket.emit('join-group', this.points);
  }
  setPoints(pointsArray) {
    this.points = pointsArray;
  }
  getPoints() {
    return this.points;
  }
}

export { PointsSocket };
