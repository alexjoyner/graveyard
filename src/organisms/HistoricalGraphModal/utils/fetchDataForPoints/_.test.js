import { fetchDataForPoints } from './';
import { env } from '../../../../.env';

const mockFetch = jest.fn().mockImplementation(data => ({
  ...data,
}));

describe('fetchDataForPoints', () => {
  let requests;
  beforeEach(() => {
    window.fetch = mockFetch;
    requests = [
      { id: 1, name: 'test' },
      { id: 2, name: 'test2' },
    ];
  });
  it('should return correct value', () => {
    const testResult = fetchDataForPoints(requests, {});
    expect(testResult).toEqual([
      new Request(`${env.serverAddr}/history/all/1`),
      new Request(`${env.serverAddr}/history/all/2`),
    ]);
  });
});
