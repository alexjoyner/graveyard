import { env } from '../../.env';
let io = require('socket.io-client');
let socket = io(env.serverAddr);

export class connect {
    static getLogsSubscription(pointsArray, cb){
        socket.emit('join-group', pointsArray);
        socket.on('add log', (log) => {
            cb(null, log);
        })
    }
}