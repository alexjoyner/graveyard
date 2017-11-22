var ModbusRTU = require('modbus-serial');
var client = new ModbusRTU();
client.connectTCP("192.168.0.106", {port: 502}, null);
client.setID(255);
client.setTimeout(1000);

module.exports = {
    getAi: function(startingAddress, numAddressesAfterStart, callback){
        if(client.isOpen){
            client.readHoldingRegisters(startingAddress, numAddressesAfterStart)
                .then(function (rawData) {
                    var formattedData = rawData.data;
                    callback(null, formattedData)
                })
                .catch(function(err){
                    callback(err, formattedData)
                });
        }else{
            // It's ok, the client just hasn't connected yet.
            callback(1);
        }
    }
}
