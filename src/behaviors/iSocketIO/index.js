import { env } from "../../.env";
const io = require('socket.io-client');
const socket = io(env.serverAddr);

class iSocketIO {
  constructor(){
    if(this.subscribe === undefined)
      throw new TypeError("Must override method");
    if(this.unsubscribe === undefined)
      throw new TypeError("Must override method");
    if(this.join === undefined)
      throw new TypeError("Must override method");
  }
}

class PointsSocket extends iSocketIO {
  constructor(){super()}
  subscribe(pointsArray, cb){
    this.join(pointsArray);
    socket.on('add log', (log) => {
        cb(null, log);
    })
  }
  unsubscribe(pointsArray, cb){
    socket.emit('leave-group', pointsArray);
  }
  join(pointsArray){
    socket.emit('join-group', pointsArray);
  }
}


export {PointsSocket};