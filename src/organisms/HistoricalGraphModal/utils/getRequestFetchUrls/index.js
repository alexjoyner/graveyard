import { env } from '../../../../.env';

export const getRequestFetchUrls = (requests, opts) => {
  const calls = requests.map((request) => {
    let start;
    let end;
    let fetchUrl;
    const input = request.id || '1';
    if (opts.start) { start = opts.start.format('YYYY-MM-DD HH:mm'); }
    if (opts.end) { end = opts.end.format('YYYY-MM-DD HH:mm'); }
    if (start && end) {
      fetchUrl = new Request(`${env.serverAddr}/history/${input}/from/${start}/${end}`);
    } else {
      fetchUrl = new Request(`${env.serverAddr}/history/all/${input}`);
    }
    return fetch(fetchUrl);
  });
  return calls;
};
