export const API = {
  on: jest.fn(),
  emit: jest.fn(),
};

export const io = jest.fn(() => API);

export default io;
