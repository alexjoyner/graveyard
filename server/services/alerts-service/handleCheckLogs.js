const calcStatusFromLog = require('./utils/calcStatusFromLog');
const handleAlert = require('./handleAlert');

const handleCheckLogs = (req, res) => {
  Object.keys(req.body).map(async pointID => {
    const currentValue = req.body[pointID].value;
    const status = await calcStatusFromLog(pointID, currentValue);
    if(status == 'ok' || status == 'unchanged'){
      return console.log(`Sensor status ${status}`);
    }
    const alertInfo = {
      status,
      pointID,
      currentValue
    }
    handleAlert(alertInfo);
  });
  res.send({ success: true })
}


module.exports = handleCheckLogs;