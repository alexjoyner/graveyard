let io;
let socket;
if(typeof window !== 'undefined'){
    io = require('socket.io-client');
    socket = io('http://localhost:3000');
}

export class connect {
    static getLogsSubscription(cb){
        socket.on('add log', (log) => {
            console.log('Adding Log: ', log);
            cb(null, log);
        })
    }
}