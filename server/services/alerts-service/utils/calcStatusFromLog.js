const getPointSettings = require('./getPointSettings');
const NodeCache = require('node-cache');
const statusCache = new NodeCache();

const calcStatusFromLog = async (pointID, currentValue) => {
  // TODO: getPointSettings should be a request to accounts-service
  const lastPointStatus = statusCache.get(pointID);
  const pointSettings = await getPointSettings(pointID);
  const ranges = pointSettings.settings.ranges;
  let status = 'internal_error';
  // Status of point always starts as internalError, this
  //   for loop should always re-assign the status to
  //   a range value because it should always be within
  //   on of the ranges
  for(let i = 0; i < ranges.length; i++){
    if(currentValue >= ranges[i].lowerValue && currentValue <= ranges[i].upperValue){
      status = ranges[i].alertLevel;
    }
  }
  statusCache.set(pointID, status);
  // If status hasn't changed since last log
  //   don't send out another alert
  if(status === lastPointStatus){
    return 'unchanged'
  }
  return status;
}

module.exports = calcStatusFromLog;