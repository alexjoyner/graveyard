import { GraphOptions } from '../../types';
import { env } from '../../../../.env';
import { Point } from '../../../../shared/types/oee-master/points';

export const fetchRawPointsLogs = async (points: Point[], opts: GraphOptions) => {
  const requests = points.map((point) => {
    let start;
    let end;
    let fetchUrl;
    const pointID = point.id || '1';
    if (opts.start) { start = opts.start.format('YYYY-MM-DD HH:mm'); }
    if (opts.end) { end = opts.end.format('YYYY-MM-DD HH:mm'); }
    if (start && end) {
      fetchUrl = new Request(`${env.serverAddr}/history/${pointID}/from/${start}/${end}`);
    } else {
      fetchUrl = new Request(`${env.serverAddr}/history/all/${pointID}`);
    }
    return fetch(fetchUrl);
  });
  try {
    let dataPoints: [[number, number]];
    const responses = await Promise.all(requests);
    const jsonCalls = responses.map(response => response.json());
    dataPoints = <[[number, number]]>(await Promise.all(jsonCalls));
    return dataPoints;
  } catch (e) {
    /* istanbul ignore next */
    throw new Error(e);
  }
};