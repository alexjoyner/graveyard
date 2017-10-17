export default {
  data: {
    x: 'x',
    unload: true,
    //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
    columns: [
      ['x'],
      //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
      ['Ambient Temp'],
    ],
  },
  axis: {
    x: {
      type: 'timeseries',
      tick: {
        format: '%H:%M:%S',
      },
    },
  },
  transition: {
    duration: 150,
  },
};
