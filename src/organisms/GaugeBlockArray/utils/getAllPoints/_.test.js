import { getPointsFromGroupID } from '../getPointsFromGroupID';
import { getAllPoints } from '.';

jest.mock('../getPointsFromGroupID', () => ({
  getPointsFromGroupID: jest.fn(),
}));

describe('getAllPoints', () => {
  it('should call getPointsFromGroupID', () => {
    getAllPoints();
    expect(getPointsFromGroupID).toBeCalledWith(0);
  });
});
