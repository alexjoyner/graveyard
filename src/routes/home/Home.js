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
import GuageChartData from './Charts/GuageChartOptions';
import LineChartData from './Charts/LineChartOptions';

class Home extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      GuageChartData,
      LineChartData,
    };
  }
  componentWillMount() {
    setInterval(() => {
      const newStateInfo = this.state;
      newStateInfo.GuageChartData.data.columns[0][1] = Math.floor(
        Math.random() * 100,
      );
      this.setState(newStateInfo);
    }, 2000);
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Ambient Temperature</h1>
          <Guage className={s.analogGauge} initData={GuageChartData} />
          <Guage className={s.lineChart} initData={LineChartData} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
