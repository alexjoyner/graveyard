let fs = require('fs');

module.exports = {
    test: function (){
        console.log('File saveData reached');
    },
    saveNewDataSetToCurrentHistory: function(data, callback) {
        let newSave = JSON.stringify(data) + ',';
        fs.appendFile('/home/pi/GitHub/ees-datalogger/modbus-service/localData/usb/data.txt', newSave, function(err) {
            if (err) throw err;
            callback(null, newSave);
        });
    }
};
