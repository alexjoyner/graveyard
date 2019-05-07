const moment = require('moment');
const ModbusClient = require('./JS_ModbusService');
/*
example:
  {'logs':
    {
      1: {'value': 76},
      2: {'value': 73},
      3: {'value': 0}},
      'datetime': '2019-05-07 12:35:48-05'
    }
  }
*/
const enabledIO = {
  AI: {
    7: {
      name: 'Ambient Temp',
      pointId: 1,
    },
    8: {
      name: 'Motor Current',
      pointId: 2,
    },
  },
};

module.exports = {
  fetchEnabledIO(callback) {
    ModbusClient.readAddresses(8959, 29, (err, data) => {
      if (err) return callback(err);
      const formattedData = {
        logs: {},
        datetime: moment().format('YYYY-MM-DD HH:mm:ss-05'),
      };
      Object.keys(enabledIO.AI).map((inputNum) => {
        const { pointId } = enabledIO.AI[inputNum];
        formattedData.logs[pointId] = {
          value: data[inputNum - 1],
        };
        return null;
      });
      return callback(null, formattedData);
    });
  },
};
