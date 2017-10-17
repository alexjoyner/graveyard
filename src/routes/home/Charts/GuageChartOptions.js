export default {
  data: {
    unload: true,
    type: 'gauge',
    columns: [['data', 40]],
  },
  specs: {
    label: {
      format: value => value,
      show: true, // to turn off the min/max labels.
    },
    units: 'F',
    min: 0,
    max: 100,
    width: 25,
  },
  color: {},
};
