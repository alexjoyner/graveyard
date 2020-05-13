export default {
  post: jest.fn().mockResolvedValue({
    data: 'Testing',
  }),
  get: jest.fn().mockResolvedValue({
    data: 'Testing',
  }),
};
