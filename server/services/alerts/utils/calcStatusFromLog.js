const NodeCache = require('node-cache');
const getPointSettings = require('./getPointSettings');

const statusCache = new NodeCache();

const calcStatusFromLog = async (pointID, currentValue) => {
  // TODO: getPointSettings should be a request to accounts
  const lastPointStatus = statusCache.get(pointID);
  const pointSettings = await getPointSettings(pointID);
  const { ranges } = pointSettings.settings;
  let status = 'internal_error';
  // Status of point always starts as internalError, this
  //   for loop should always re-assign the status to
  //   a range value because it should always be within
  //   on of the ranges
  ranges.map((range) => {
    if (currentValue >= range.lowerValue && currentValue <= range.upperValue) {
      status = range.alertLevel;
    }
    return null;
  });
  statusCache.set(pointID, status);
  // If status hasn't changed since last log
  //   don't send out another alert
  if (status === lastPointStatus) {
    return 'unchanged';
  }
  return status;
};

module.exports = calcStatusFromLog;
