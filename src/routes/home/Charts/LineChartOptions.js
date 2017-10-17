export default {
  data: {
    x: 'x',
    //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
    columns: [
      [
        'x',
        '2013-01-01',
        '2013-01-02',
        '2013-01-03',
        '2013-01-04',
        '2013-01-05',
        '2013-01-06',
      ],
      //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
      ['Ambient Temp', 73.5, 73.8, 75, 76, 74, 78],
    ],
  },
  axis: {
    x: {
      type: 'timeseries',
      tick: {
        format: '%Y-%m-%d',
      },
    },
  },
};
