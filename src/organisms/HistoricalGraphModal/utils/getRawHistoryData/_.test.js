import { getRawHistoryData } from './';

describe('getRawHistoryData', () => {
  let calls;
  beforeEach(() => {
    calls = [
      Promise.resolve({ json: () => [1, 2] }),
      Promise.resolve({ json: () => [3, 4] }),
    ];
  });
  it('should return correct data', async () => {
    const result = await getRawHistoryData(calls);
    expect(result).toEqual([[1, 2], [3, 4]]);
  });
});
