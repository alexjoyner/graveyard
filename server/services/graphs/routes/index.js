const { runBasicQuery, ...processes } = require('./processes');
module.exports = (app) => {
  app.get('/all/:pointID', runBasicQuery(processes.getLogsByPointID));
  app.get('/last/:pointID', runBasicQuery(processes.getLastLogByPointID));
  app.get('/:pointID/from/:start/:end', runBasicQuery(processes.getLogsFromInterval));
};
