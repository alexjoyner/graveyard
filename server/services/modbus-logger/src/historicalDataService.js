const fs = require('fs');

module.exports = {
  test() {
    console.log('File saveData reached');
  },
  saveNewDataSetToCurrentHistory(data, callback) {
    const newSave = `${JSON.stringify(data)},`;
    fs.appendFile('/home/pi/GitHub/ees-datalogger/modbus-service/localData/usb/data.txt', newSave, (err) => {
      if (err) throw err;
      callback(null, newSave);
    });
  },
};
