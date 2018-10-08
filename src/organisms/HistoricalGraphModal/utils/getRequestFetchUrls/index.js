import moment from 'moment';
import { env } from '../../../../.env';

export const getRequestFetchUrls = (requests, opts) => {
  const calls = requests.map((request) => {
    let start;
    let end;
    let fetchUrl;
    const input = request.id || '1';
    const now = moment().format('YYYY-MM-DD HH:mm');
    if (opts.start) { start = opts.startDate.format('YYYY-MM-DD HH:mm'); }
    if (opts.end) { end = opts.endDate.format('YYYY-MM-DD HH:mm'); }
    if (start && end) {
      fetchUrl = new Request(`${env.serverAddr}/history/${input}/from/${start}/${end}`);
    } else if (start && !end) {
      fetchUrl = new Request(`${env.serverAddr}/history/${input}/from/${start}/${now}`);
    } else {
      fetchUrl = new Request(`${env.serverAddr}/history/all/${input}`);
    }
    return fetch(fetchUrl);
  });
  return calls;
};
