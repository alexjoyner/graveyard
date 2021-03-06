import { PointsObject, Point } from '../../../../shared/types/oee-master/points';

export const getPointsFromGroupID = async (groupID: number) => {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  try {
    const requestUrl = (groupID === 0)
      ? new Request(`${process.env.REACT_APP_SERVER_ADDRESS}/me/points`, { headers })
      : new Request(`${process.env.REACT_APP_SERVER_ADDRESS}/me/points/group/${groupID}`, { headers });
    const response = await fetch(requestUrl);
    const pointsArray = await response.json();
    const points: PointsObject = {};
    pointsArray.map((point: Point) => {
      points[point.id] = point;
      return null;
    });
    return points;
  } catch (e) {
    /* istanbul ignore next */
    throw new Error(e);
  }
};