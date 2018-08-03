let io = require('socket.io-client');
let socket = io('http://localhost:8080');

export class connect {
    static getLogsSubscription(cb){
      socket.on('add log', (log) => {
          console.log('Adding Log: ', log);
          cb(null, log);
      })
    }
}