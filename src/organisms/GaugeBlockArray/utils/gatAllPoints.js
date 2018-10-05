import { getPointsFromGroupID } from './getPointsFromGroupID';

export const getAllPoints = async () => {
  try {
    // Group ID 0 is used as an id to get all points
    return await getPointsFromGroupID(0);
  } catch (e) {
    console.error(e);
    return e;
  }
};
