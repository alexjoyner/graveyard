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
  getGroupsByClientID: (req) => {
    const { clientID } = req.params;
    return {
      text: getQueryText('./queries/getGroupsByClientID.pgsql'),
      values: [clientID],
    };
  },
  getPointsByClientID: (req) => {
    const { clientID } = req.params;
    return {
      text: getQueryText('./queries/getPointsByClientID.pgsql'),
      values: [clientID],
    };
  },
  getPointsByGroupID: (req) => {
    const { groupID } = req.params;
    return {
      text: getQueryText('./queries/getPointsByGroupID.pgsql'),
      values: [groupID],
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
