import { getPointsFromGroupID } from '.';

const mockFetch = data => jest.fn().mockImplementation(() => Promise.resolve({
  status: 200,
  json: () => data,
}));

describe('getPointsFromGroupID', () => {
  it('should return correct data', async () => {
    window.fetch = mockFetch([
      { id: 1, name: 'testPoint' },
      { id: 2, name: 'testPoint2' },
    ]);
    const result = await getPointsFromGroupID(0);
    expect(result).toEqual({
      1: { id: 1, name: 'testPoint' },
      2: { id: 2, name: 'testPoint2' },
    });
  });
});

