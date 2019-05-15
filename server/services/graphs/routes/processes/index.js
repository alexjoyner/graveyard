const { getTextFromFile } = require('ro-server-utils');

module.exports = {
  getLogsByPointID: (req) => {
    const { pointID } = req.params;
    return {
      rowMode: 'array',
      text: getTextFromFile(__dirname, '../queries/getLogsByPointID.pgsql'),
      values: [pointID, 'America/New_York'], //TODO: Programatically include timezone
    };
  },
  getLastLogByPointID: (req) => {
    const { pointID } = req.params;
    return {
      rowMode: 'array',
      text: getTextFromFile(__dirname, '../queries/getLastLogByPointID.pgsql'),
      values: [pointID, 'America/New_York'], //TODO: Programatically include timezone
    };
  },
  getLogsFromInterval: (req) => {
    const { pointID, start, end } = req.params;
    return {
      rowMode: 'array',
      text: getTextFromFile(__dirname, '../queries/getLogsFromInterval.pgsql'),
      values: [pointID, start, end, 'America/New_York'], //TODO: Programatically include timezone
    };
  },
};
