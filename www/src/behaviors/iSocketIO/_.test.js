import io from 'socket.io-client';
import { PointsSocket, ISocketIO } from './index';

jest.mock('socket.io-client', () => ({
  on: jest.fn(),
  emit: jest.fn(),
}));
class BrokenISocket1 extends ISocketIO {}
class BrokenISocket2 extends ISocketIO {
  subscribe() { return this; }
}
class BrokenISocket3 extends ISocketIO {
  subscribe() { return this; }
  unsubscribe() { return this; }
}

describe('iSocketIO classed', () => {
  describe('iSocketIO Base Class', () => {
    it('should throw from not implementing subscribe', () => {
      const createBrokenSocket = () => new BrokenISocket1();
      expect(createBrokenSocket).toThrowError(TypeError);
    });
    it('should throw from not implementing unsubscirbe', () => {
      const createBrokenSocket = () => new BrokenISocket2();
      expect(createBrokenSocket).toThrowError(TypeError);
    });
    it('should throw from not implementing join', () => {
      const createBrokenSocket = () => new BrokenISocket3();
      expect(createBrokenSocket).toThrowError(TypeError);
    });
  });
  describe('PointsSocket', () => {
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
});
