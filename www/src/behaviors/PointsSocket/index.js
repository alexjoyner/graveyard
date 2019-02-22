import io from 'socket.io-client';
import { env } from '../../.env';
import { ISocketIO } from '../interfaces/ISocketIO';

class PointsSocket extends ISocketIO {
  constructor() {
    super();
    this.points = [];
    const connectionOptions = {
      'force new connection': true,
      reconnectionAttempts: 'Infinity', // avoid having user reconnect manually in order to prevent dead clients after a server restart
      timeout: 10000, // before connect_error and connect_timeout are emitted.
      transports: ['websocket'],
    };
    this.socket = io(env.serverAddr, connectionOptions);
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
    if (this.points.length > 0) {
      this.socket.emit('leave-group', this.points);
    }
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
