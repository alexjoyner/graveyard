import { env } from '../../../.env';

export const getAllPoints = async (clientID) => {
  try {
    const requestUrl = new Request(`${env.serverAddr}/me/points/${clientID}`);
    const response = await fetch(requestUrl);
    const pointsArray = await response.json();
    const pointsIdArray = pointsArray.map(point => point.id);
    return pointsIdArray;
  } catch (e) {
    console.error(e);
    return e;
  }
};
