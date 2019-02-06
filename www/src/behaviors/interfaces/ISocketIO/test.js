import { ISocketIO } from '.';

class BrokenISocket1 extends ISocketIO {}
class BrokenISocket2 extends ISocketIO {
  subscribe() { return this; }
}
class BrokenISocket3 extends ISocketIO {
  subscribe() { return this; }

  unsubscribe() { return this; }
}


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
