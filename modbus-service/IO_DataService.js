var ModbusClient = require('./JS_ModbusService');

module.exports = {
    fetchIO: function (callback) {
        ModbusClient.getAi(0, 8, function (err, data) {
            if (err) return callback(err);
            callback(null, data);
        })
    }
}
