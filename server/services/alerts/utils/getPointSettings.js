const utils = require('ro-server-utils');
const NodeCache = require('node-cache');
const settingsCache = new NodeCache();

const getPointSettings = async (pointID) => {
  try {
    const cacheSettings = settingsCache.get(pointID);
    if (cacheSettings == undefined) {
      const query = utils.runQuery();
      const rawResult = await query('pg', {
        text: 'SELECT * FROM point WHERE id = $1;',
        values: [pointID]
      });
      const pointSettings = rawResult[0];
      settingsCache.set(pointID, pointSettings);
      return pointSettings;
    } else {
      return cacheSettings;
    }
  } catch (e) {
    return e;
  }
};

module.exports = getPointSettings;