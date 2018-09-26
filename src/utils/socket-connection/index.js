import { env } from '../../.env';
let io = require('socket.io-client');
let socket = io(env.serverAddr);

export class SocketConnection {
    static subscribeToPoints(pointsArray, cb){
        socket.emit('join-group', pointsArray);
        socket.on('add log', (log) => {
            cb(null, log);
        })
    }
    static unsubscribeFromPoints(pointsArray, cb){
        socket.emit('leave-group', pointsArray);
    }
}