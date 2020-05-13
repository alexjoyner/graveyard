const moment = () => ({
  subtract: jest.fn().mockImplementation((num, interval) => num + interval),
});

export default moment;
