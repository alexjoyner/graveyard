import { env } from '../../../.env';

export const getPointsFromGroupID = async (groupID) => {
  try {
    const requestUrl = (groupID === 0) ?
      new Request(`${env.serverAddr}/me/points/1`) :
      new Request(`${env.serverAddr}/me/points/group/${groupID}`);
    const response = await fetch(requestUrl);
    const pointsArray = await response.json();
    const pointsIdArray = pointsArray.map(point => point.id);
    return pointsIdArray;
  } catch (e) {
    throw new Error(e);
  }
};
