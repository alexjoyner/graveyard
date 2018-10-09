import io from 'socket.io-client';
import { PointsSocket } from './index';

jest.mock('socket.io-client', () => ({
  on: jest.fn(),
  emit: jest.fn(),
}));

describe('iSocketIO', () => {
  let testSocket;
  beforeEach(() => {
    testSocket = new PointsSocket({
      socket: io,
    });
  });
  it('should allow setting points', () => {
    testSocket.setPoints([1, 2, 3]);
    expect(testSocket.getPoints()).toEqual([1, 2, 3]);
  });
  it('should allow join group', () => {
    testSocket.setPoints([7, 1, 3]);
    testSocket.join();
    expect(io.emit).toBeCalledWith('join-group', [7, 1, 3]);
  });
  it('should allow unsubscribe', () => {
    testSocket.setPoints([7, 1, 3]);
    testSocket.unsubscribe();
    expect(io.emit).toBeCalledWith('leave-group', [7, 1, 3]);
  });
  it('should allow subscribe', () => {
    const mockCallback = jest.fn();
    testSocket.subscribe([1, 2, 3], mockCallback);
    expect(io.on).toHaveBeenCalledWith('add log', expect.any(Function));
  });
});
