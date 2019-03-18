import { env } from '../../../../.env';

export const getPointsFromGroupID = async (groupID) => {
  const token = localStorage.getItem('token');
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  try {
    const requestUrl = (groupID === 0)
      ? new Request(`${env.serverAddr}/me/points`, { headers })
      : new Request(`${env.serverAddr}/me/points/group/${groupID}`, { headers });
    const response = await fetch(requestUrl);
    const pointsArray = await response.json();
    const points = {};
    pointsArray.map((point) => {
      points[point.id] = point;
      return null;
    });
    return points;
  } catch (e) {
    /* istanbul ignore next */
    throw new Error(e);
  }
};
