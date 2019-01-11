// TODO: This file should get client details from the accounts service api;
const utils = require('ro-server-utils');
const NodeCache = require('node-cache');
const clientInfoCache = new NodeCache();

const getClientInfo = async (clientID) => {
  try {
    const cacheSettings = clientInfoCache.get(clientID);
    if (cacheSettings == undefined) {
      const query = utils.runQuery();
      const rawResult = await query('pg', {
        text: 'SELECT name, danger_number, warning_number FROM client WHERE id = $1;',
        values: [clientID]
      });
      const pointSettings = rawResult[0];
      clientInfoCache.set(clientID, pointSettings);
      return pointSettings;
    } else {
      return cacheSettings;
    }
  } catch (e) {
    return e;
  }
};

module.exports = getClientInfo;