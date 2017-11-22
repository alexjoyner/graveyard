var ModbusClient = require('./JS_ModbusService');

module.exports = {
    fetchIO: function (callback) {
        ModbusClient.getAi(8959, 24, function (err, data) {
            if (err) return callback(err);
            callback(null, data);
        })
    }
}
