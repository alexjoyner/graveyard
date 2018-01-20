let ModbusRTU = require('modbus-serial');
let client = new ModbusRTU();
client.connectTCP("localhost", {port: 502}, null);
client.setID(200);
client.setTimeout(1000);

module.exports = {
    getAi: function(startingAddress, numAddressesAfterStart, callback){
        if(client.isOpen){
            client.readInputRegisters(startingAddress, numAddressesAfterStart)
                .then(function (rawData) {
                    let formattedData = rawData.data;
                    callback(null, formattedData)
                })
                .catch(function(err){
                    callback(err, null)
                });
        }else{
            // It's ok, the client just hasn't connected yet.
            callback(1);
        }
    }
}
