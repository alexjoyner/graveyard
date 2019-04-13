import mockIO, { API as mockIOApi } from 'socket.io-client';
import { env } from '../../.env';
import { PointsSocket } from '.';

describe('PointsSocket', () => {
  let testSocket;
  beforeEach(() => {
    testSocket = new PointsSocket();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Should exist', () => {
    expect(testSocket).toBeDefined();
  });
  it('Should setup a new socket', () => {
    expect(testSocket.getPoints()).toEqual([]);
    expect(mockIO).toHaveBeenLastCalledWith(env.serverAddr);
  });
  it('should allow subscribing to points', () => {
    testSocket.subscribe([1, 2, 3]);
    expect(testSocket.getPoints()).toEqual([1, 2, 3]);
  });
  it('should allow join group', () => {
    testSocket.setPoints([7, 1, 3]);
    testSocket.join();
    expect(mockIOApi.emit).toBeCalledWith('join-group', [7, 1, 3]);
  });
  it('should allow get last logs', () => {
    testSocket.setPoints([7, 1, 3]);
    testSocket.getLastLogs();
    expect(mockIOApi.emit).toBeCalledWith('get-last-logs', [7, 1, 3]);
  });
  it('should allow unsubscribe', () => {
    testSocket.setPoints([7, 1, 3]);
    testSocket.unsubscribe();
    expect(mockIOApi.emit).toBeCalledWith('leave-group', [7, 1, 3]);
  });
  it('should not emit leave-group when there are no points', () => {
    testSocket.setPoints([]);
    testSocket.unsubscribe();
    expect(mockIOApi.emit).toHaveBeenCalledTimes(0);
  });
  it('should allow subscribe', () => {
    const mockCallback = jest.fn();
    testSocket.subscribe([1, 2, 3], mockCallback);
    expect(mockIOApi.on).toHaveBeenCalledWith('add log', expect.any(Function));
    expect(mockIOApi.emit).toHaveBeenCalledWith('join-group', [1, 2, 3]);
  });
});
