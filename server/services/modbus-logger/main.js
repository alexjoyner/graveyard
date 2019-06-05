// const { makeApp, runApp } = require('ro-server-utils');
// const axios = require('axios');

// const app = makeApp('basic');
// const ioDataService = require('./src/IO_DataService');

// const SERVER_ADDRESS = process.env.SERVER_ADDRESS || 'http://localhost:3000';


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

// const logNewPoint = (callback) => {
//   ioDataService.fetchEnabledIO(async (err, logs) => {
//     if (err) return callback(err);
//     console.log('new log: ', logs);
//     if (logs) {
//       await axios.post(`${SERVER_ADDRESS}/new`, logs);
//     }
//     return callback(null, 200);
//   });
// };
// const runEesLogger = () => {
//   try {
//     logNewPoint((err) => {
//       if (err && err !== 1) console.error(err);
//     });
//   } catch (err) {
//     console.error(err);
//   } finally {
//     setTimeout(() => {
//       runEesLogger();
//     }, 3000);
//   }
// };
// runEesLogger();

// app.get('/', (req, res) => {
//   logNewPoint((err, data) => {
//     if (err) return res.send({ ERROR: err });
//     console.log(typeof data);
//     return res.send({ Data: data });
//   });
// });

// // If we ever throw an error that isn't caught,
// //  log the error and kill the app. Docker will handle
// //  bringing the app back up and restarting the server.
// process.on('uncaughtException', (error) => {
//   console.error(error);
//   process.exit(1);
// });

// runApp(app);

/* eslint-disable no-console, spaced-comment */

// create an empty modbus client
const { makeApp, runApp } = require('ro-server-utils');
const ModbusRTU = require('modbus-serial');
const axios = require('axios');
const ioDataService = require('./src/IO_DataService');

let client = new ModbusRTU();
let timeoutRunRef = null;
let timeoutConnectRef = null;
const SERVER_ADDRESS = process.env.SERVER_ADDRESS || 'http://localhost:3000';
const CONTROLLER_ADDRESS = process.env.CONTROLLER_ADDRESS || 'localhost';
const LOG_INTERVAL = 3000;
const CONTROLLER_ID = 255;

const networkErrors = [
  'ESOCKETTIMEDOUT',
  'ETIMEDOUT',
  'ECONNRESET',
  'ECONNREFUSED',
  'EHOSTUNREACH',
  'ENETRESET',
  'ECONNABORTED',
  'ENETUNREACH',
  'ENOTCONN',
  'ESHUTDOWN',
  'EHOSTDOWN',
  'ENETDOWN',
  'EWOULDBLOCK',
  'EAGAIN',
];

const app = makeApp('basic');

// check error, and reconnect if needed
function checkError(e) {
  if (e.errno && networkErrors.includes(e.errno)) {
    console.log('LINE 103: ', e.errno, ' we have to reconnect');

    // close port
    client.close();
    console.log('LINE 107: closed bad connection');

    // re open client
    client = new ModbusRTU();
    console.log('LINE 111: re-opening client');

    timeoutConnectRef = setTimeout(connect, 1000);
  }
}

// open connection to a serial port
function connect() {
  console.log('LINE 119: Trying to connect to controller');
  // clear pending timeouts
  clearTimeout(timeoutConnectRef);

  // if client already open, just run
  if (client.isOpen) {
    console.log('Client is open, Running logger');
    run();
  }

  // if client closed, open a new connection
  client.connectTCP(CONTROLLER_ADDRESS, { port: 502 })
    .then(setClient)
    .then(() => {
      console.log('Connected to controller. Starting Logger');
    })
    .catch((e) => {
      console.log('LINE 136: Could not connect');
      checkError(e);
      console.log('LINE: 138', e.message);
    });
}

function setClient() {
  // set the client's unit id
  // set a timout for requests default is null (no timeout)
  client.setID(CONTROLLER_ID);
  client.setTimeout(1000);

  // run program
  run();
}

function run() {
  // clear pending timeouts
  clearTimeout(timeoutRunRef);

  // read the 4 registers starting at address 5
  client.readHoldingRegisters(8959, 29)
    .then((res) => {
      const { data } = res;
      const logData = ioDataService.convertModbusDataToLogObject(data);
      console.log('new log: ', logData);
      axios.post(`${SERVER_ADDRESS}/new`, logData);
    })
    .then(() => {
      timeoutRunRef = setTimeout(run, LOG_INTERVAL);
    })
    .catch((e) => {
      checkError(e);
      console.log('LINE: 169', e.message);
    });
}


// connect and start logging
connect();
runApp(app);
