// const ModbusRTU = require('modbus-serial');

// const client = new ModbusRTU();
// const CONTROLLER_ADDRESS = process.env.CONTROLLER_ADDRESS || 'localhost';
// console.log('Controller Address: ', CONTROLLER_ADDRESS, typeof CONTROLLER_ADDRESS);
// client.connectTCP(CONTROLLER_ADDRESS, { port: 502 }, null);
// client.setID(255);
// //client.setTimeout(2000);

// module.exports = {
//   readAddresses(startingAddress, numAddressesAfterStart, callback) {
//     if (client.isOpen) {
//       client.readHoldingRegisters(startingAddress, numAddressesAfterStart)
//         .then((rawData) => {
//           const { data } = rawData;
//           callback(null, data);
//         })
//         .catch((err) => {
//           callback(err, null);
//         });
//     } else {
//       // It's ok, the client just hasn't connected yet.
//       callback(1);
//     }
//   },
// };


/* eslint-disable no-console, spaced-comment */

// create an empty modbus client
const ModbusRTU = require('modbus-serial');

const CONTROLLER_ADDRESS = process.env.CONTROLLER_ADDRESS || 'localhost';

let client = new ModbusRTU();
const timeoutRunRef = null;
let timeoutConnectRef = null;

const networkErrors = ['ESOCKETTIMEDOUT', 'ETIMEDOUT', 'ECONNRESET', 'ECONNREFUSED', 'EHOSTUNREACH'];

// check error, and reconnect if needed
function checkError(e) {
  if (e.errno && networkErrors.includes(e.errno)) {
    console.log('we have to reconnect');

    // close port
    client.close();

    // re open client
    client = new ModbusRTU();
    timeoutConnectRef = setTimeout(connect, 1000);
  }
}

// open connection to a serial port
function connect() {
  // clear pending timeouts
  clearTimeout(timeoutConnectRef);

  // if client already open, just run
  if (client.isOpen) {
    run();
  }

  // if client closed, open a new connection
  client.connectTCP(CONTROLLER_ADDRESS, { port: 502 }, null)
    .then(setClient)
    .then(() => {
      console.log('Connected to: ', CONTROLLER_ADDRESS);
    })
    .catch((e) => {
      checkError(e);
      console.log(e.message);
    });
}

const setClient = () => {
  // set the client's unit id
  // set a timout for requests default is null (no timeout)
  client.setID(255);
  client.setTimeout(2000);
};

module.exports = {
  readAddresses(startingAddress, numAddressesAfterStart, callback) {
    if (client.isOpen) {
      // clear pending timeouts
      clearTimeout(timeoutRunRef);

      // read the 4 registers starting at address 5
      client.readHoldingRegisters(startingAddress, numAddressesAfterStart)
        .then((rawData) => {
          const { data } = rawData;
          callback(null, data);
        })
        .catch((err) => {
          checkError(err);
          callback(err, null);
        });
    } else {
      // It's ok, the client just hasn't connected yet.
      callback(1);
    }
  },
};


// connect and start logging
connect();
