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
  columns: [['data', 91.4]],
  type: 'gauge',
};
class Home extends React.Component {
  static propTypes = {};
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Ambient Temperature</h1>
          <Guage data={chartData} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
