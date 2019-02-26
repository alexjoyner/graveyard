const moment = jest.fn(() => ({
  tz: () => moment(),
  subtract: () => moment(),
}));

export default moment;
