var fs = require('fs');

module.exports = {
    test: function (){
        console.log('File saveData reached');
    },
    getJSON_Data: function(callback){
        fs.readFile('/home/pi/GitHub/ees-datalogger/modbus-service/localData/usb/data.txt', 'utf8', function(err, localData) {
            if (err) throw err;
            callback(null, JSON.parse(localData));
            return;
            newHistory.push({
                'timestamp': new Date(),
                'ai1': 45,
                'ai2': 200,
                'ai3': 75
            });
            newHistory = JSON.stringify(newHistory);
            newHistory += '\n';

        });
    },
    saveNewDataSetToCurrentHistory: function(data, callback) {
        var newSave = JSON.stringify(data) + ',';
        fs.appendFile('/home/pi/GitHub/ees-datalogger/modbus-service/localData/usb/data.txt', newSave, function(err) {
            if (err) throw err;
            callback(null, newSave);
        });
    }
};
