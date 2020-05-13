const utils = require('ro-server-utils');
const getPointSettings = require('./utils/getPointSettings');
const getClientInfo = require('./utils/getClientInfo');
const contactInfo = ''
const buildAdminMessage = (clientInfo, sensorInfo) => {
  return (
`OEE-MASTER Internal Error:

client:${clientInfo.name}
sensor:${sensorInfo.name}
status:${sensorInfo.status}
value:${sensorInfo.currentValue}`
  );
}
const buildClientMessage = (clientInfo, sensorInfo) => {
  return (
`This is Evan\'s Electrical Services LLC.

Our system, oee-master, detected:
client:${clientInfo.name}
sensor:${sensorInfo.name}
status:${sensorInfo.status}
value:${sensorInfo.currentValue}

Contact Evan\'s Electrical Services
if this doesn\'t seem correct or if
you have any problems resolving this
issue.`
  );
}
const sendTextAlert = async (opts) => {
  try{
    await utils.notify()('text', opts);
  }catch(e){
    console.error(e);
  }
}
const runInternalErrorAlert = (clientInfo, sensorInfo) => {
  sendTextAlert({
    message: buildAdminMessage(clientInfo, sensorInfo),
    recipient: '2523820384'
  });
}
const runDangerAlert = (clientInfo, sensorInfo) => {
  sendTextAlert({
    message: buildClientMessage(clientInfo, sensorInfo),
    recipient: `${clientInfo.danger_number}`
  });
  if(clientInfo.danger_number !== clientInfo.warning_number){
    runWarningAlert(clientInfo, sensorInfo);
  }
}
const runWarningAlert = (clientInfo, sensorInfo) => {
  sendTextAlert({
    message: buildClientMessage(clientInfo, sensorInfo),
    recipient: `${clientInfo.warning_number}`
  });
}
const runStatusAlert = {
  internal_error: runInternalErrorAlert,
  danger: runDangerAlert,
  warning: runWarningAlert
}
const handleAlert = async (opts) => {
  const pointSettings = await getPointSettings(opts.pointID);
  const clientInfo = await getClientInfo(pointSettings.client_id);
  console.log(`${JSON.stringify(clientInfo)}`);
  runStatusAlert[opts.status](clientInfo, {
    ...pointSettings,
    ...opts
  });
}

module.exports = handleAlert;