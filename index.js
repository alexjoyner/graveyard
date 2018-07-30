const axios = require('axios');
const moment = require('moment');

const MAX_VAL = 100;
const MIN_VAL = 0;

const getRandomValue = (max, min) => {
    const RAND_VAL = Math.floor(Math.random() * max) + min;
    return RAND_VAL
}

const getLog = (opts) => {
    const RAND_VAL = getRandomValue(opts.max, opts.min);
    return {
        metric: opts.metric.id,
        value: RAND_VAL,
        timeStamp: moment().format('YYYY-MM-DD HH:mm')
    }
}

class Logger{
    constructor(opts){
        this.frequency = opts.frequency || 1000; //every 1 second
        this.max = opts.max || MAX_VAL || 100;
        this.min = opts.min || MIN_VAL || 0;
    }
    run(){
       const log = getLog({
        max: this.max,
        min: this.min,
        metric: {
            id: 1
        }
       });
       this.postToServer(log);
       console.log('New Log: ', log);
       setTimeout(() => {
           this.run();
       }, this.frequency);
    }
    postToServer(log){
      axios.post('http://localhost:8080/log/', log)
    }
}
const mainLogger = new Logger({
    frequency: 1000 * 30
});
console.log('Starting logger');
mainLogger.run();
