/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Guage from '../../components/Charts/Guage/Guage';

const chartData = {
  data: {
    type: 'gauge',
    columns: [['data', 0]],
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
const LineChartData = {
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
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 130, 340, 200, 500, 250, 350],
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

class Home extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Ambient Temperature</h1>
          <Guage initData={chartData} />
          <Guage initData={LineChartData} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
