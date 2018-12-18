const utils = require('ro-server-utils');
const fs = require('fs');
const path = require('path');

const getQueryText = (relativePath) => {
  const queryText = fs.readFileSync(
    path.resolve(__dirname, relativePath), 'utf8'
  );
  return queryText;
}

module.exports = {
  getLogsByPointID: (req) => {
    const { pointID } = req.params;
    return {
      rowMode: 'array',
      text: getQueryText('./queries/getLogsByPointID.pgsql'),
      values: [pointID],
    };
  },
  getLastLogByPointID: (req) => {
    const { pointID } = req.params;
    return {
      rowMode: 'array',
      text: getQueryText('./queries/getLastLogByPointID.pgsql'),
      values: [pointID],
    };
  },
  getLogsFromInterval: (req) => {
    const { pointID, start, end } = req.params;
    return {
      rowMode: 'array',
      text: getQueryText('./queries/getLogsFromInterval.pgsql'),
      values: [pointID, start, end],
    };
  },
  runBasicQuery: getQuery => async (req, res) => {
    try {
      const groups = await utils.runQuery('pg', getQuery(req));
      res.send(groups);
    } catch (e) {
      console.error(e);
      res.status(500).send('Something went wrong. Sorry');
    }
  },
};
