import { env } from '../../.env';
let io = require('socket.io-client');
let socket = io(env.serverAddr, {path: '/live'});

export class connect {
    static getLogsSubscription(cb){
      socket.on('add log', (log) => {
          console.log('Adding Log: ', log);
          cb(null, log);
      })
    }
}