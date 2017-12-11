let ModbusClient = require('./JS_ModbusService');

module.exports = {
    fetchIO: function (callback) {
        ModbusClient.getAi(8, 8, function (err, data) {
            if (err) return callback(err);
            callback(null, data);
        })
    }
}
