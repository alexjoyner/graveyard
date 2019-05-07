const ModbusRTU = require('modbus-serial');

const client = new ModbusRTU();
const CONTROLLER_ADDRESS = process.env.CONTROLLER_ADDRESS || 'localhost';
console.log('Controller Address: ', CONTROLLER_ADDRESS, typeof CONTROLLER_ADDRESS);
client.connectTCP(CONTROLLER_ADDRESS, { port: 502 }, null);
client.setID(255);
client.setTimeout(2000);

module.exports = {
  readAddresses(startingAddress, numAddressesAfterStart, callback) {
    if (client.isOpen) {
      client.readHoldingRegisters(startingAddress, numAddressesAfterStart)
        .then((rawData) => {
          const { data } = rawData;
          callback(null, data);
        })
        .catch((err) => {
          callback(err, null);
        });
    } else {
      // It's ok, the client just hasn't connected yet.
      callback(1);
    }
  },
};
