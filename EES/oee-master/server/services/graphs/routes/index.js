const {
  query, sendLocal,
} = require('ro-server-utils');
const {
  getLogsByPointID,
  getLastLogByPointID,
  getLogsFromInterval,
} = require('./processes');

module.exports = (app) => {
  // #### Routes For Real Users ####
  app.get('/all/:pointID',
    query('pg', getLogsByPointID),
    sendLocal('results'));
  app.get('/last/:pointID',
    query('pg', getLastLogByPointID),
    sendLocal('results'));
  app.get('/:pointID/from/:start/:end',
    query('pg', getLogsFromInterval),
    sendLocal('results'));
};
