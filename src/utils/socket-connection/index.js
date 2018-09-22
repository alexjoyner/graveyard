import { env } from '../../.env';
let io = require('socket.io-client');
let socket = io(env.serverAddr);

export class connect {
    constructor(pointArray){
    }
    static getLogsSubscription(pointsArray, cb){
        console.log('Attempting to join group');
        socket.emit('join-group', pointsArray);
        socket.on('add log', (log) => {
            cb(null, log);
        })
    }
}