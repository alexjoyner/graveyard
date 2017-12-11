let ModbusRTU = require('modbus-serial');
let client = new ModbusRTU();
client.connectTCP("localhost", {port: 502}, null);
client.setID(200);
client.setTimeout(1000);

module.exports = {
    getAi: function(startingAddress, numAddressesAfterStart, callback){
        return callback(null, 58);
        if(client.isOpen){
            // client.readInputRegisters(startingAddress, numAddressesAfterStart)
            //     .then(function (rawData) {
            //         //var formattedData = rawData.data;
            //         console.log(JSON.stringify(rawData));
            //         callback('NOT SET YET', null)
            //     })
            //     .catch(function(err){
            //         callback(err, null)
            //     });
        }else{
            // It's ok, the client just hasn't connected yet.
            callback(1);
        }
    }
}
