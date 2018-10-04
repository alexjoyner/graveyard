import io from 'socket.io-client';
import { env } from '../../.env';

const socket = io(env.serverAddr);

class iSocketIO {
  constructor() {
    if (this.subscribe === undefined) { throw new TypeError('Must override method'); }
    if (this.unsubscribe === undefined) { throw new TypeError('Must override method'); }
    if (this.join === undefined) { throw new TypeError('Must override method'); }
  }
}

class PointsSocket extends iSocketIO {
  subscribe(pointsArray, cb) {
    this.points = pointsArray;
    this.join();
    socket.on('add log', (log) => {
      cb(null, log);
    });
  }
  unsubscribe() {
    socket.emit('leave-group', this.points);
  }
  join() {
    socket.emit('join-group', this.points);
  }
}

export { PointsSocket };
