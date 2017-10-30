/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import axios from 'axios';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import GuageChartData from './Charts/GuageChartOptions';
import LineChartData from './Charts/LineChartOptions';
import Chart from '../../components/Charts/Chart';

class Home extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      currentAnalogTemp: 20,
      tempHistoryData: [['x'], ['Analog Temp']],
    };
  }

  componentDidMount() {
    setInterval(() => {
      axios.get('http://192.168.0.46:3000/ai1').then(res => {
        const data = JSON.parse(res.request.response).data[2] / 10;
        const newStateInfo = this.state;
        // newStateInfo.GuageChartData.data.columns[0][1] = data;
        const date = new Date();
        // newStateInfo.LineChartData.data.columns[0].push(date);
        // newStateInfo.LineChartData.data.columns[1].push(
        //   Math.round(data * 10) / 10,
        // );
        newStateInfo.currentAnalogTemp = data;
        newStateInfo.tempHistoryData[0].push(date);
        newStateInfo.tempHistoryData[1].push(data);
        this.setState(newStateInfo);
      });
    }, 1500);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Ambient Temperature</h1>
          <Chart
            chartID={'chart1'}
            chartOpts={{
              data: {
                columns: [['Data', this.state.currentAnalogTemp]],
                type: 'gauge',
              },
              gauge: {
                label: {
                  format: value => `${value}°F`,
                },
              },
              color: {
                pattern: ['#50bcef', '#F6C600', '#4eac5b', '#FF0000'], // the three color levels for the percentage values.
                threshold: {
                  values: [30, 70, 78, 100],
                },
              },
            }}
          />
          <Chart
            chartID={'chart2'}
            chartOpts={{
              data: {
                x: 'x',
                //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
                columns: this.state.tempHistoryData,
              },
              axis: {
                x: {
                  type: 'timeseries',
                  tick: {
                    format: '%Y-%m-%d',
                  },
                },
              },
              point: {
                show: false,
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
