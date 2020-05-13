import { env } from '../../../../.env';

export const fetchDataForPoints = (points, opts) => {
  const calls = points.map((point) => {
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
  return calls;
};
