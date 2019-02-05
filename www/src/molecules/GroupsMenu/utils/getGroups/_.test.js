import { getGroups } from '.';

const mockFetch = data => jest.fn().mockImplementation(() => Promise.resolve({
  status: 200,
  json: () => data,
}));

describe('App Actions', () => {
  describe('getGroups', () => {
    it('should return correct data', async () => {
      window.fetch = mockFetch('testing');
      const result = await getGroups();
      expect(result).toEqual('testing');
    });
  });
});
