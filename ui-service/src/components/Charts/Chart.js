import React, { Component } from 'react';
let c3;
if(typeof(window) !== 'undefined') {
    require('d3');
    c3 = require('c3');
}
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from 'c3/c3.css';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.chart = {};
  }
  componentDidMount() {
    this.updateChart();
  }
  shouldComponentUpdate(nextProps) {
    this.chart.load({
      columns: nextProps.chartOpts.data.columns,
    });
    return false;
  }
  componentDidUpdate() {
    this.updateChart();
  }

  updateChart() {
    this.chart = c3.generate({
      bindto: `#${this.props.chartID}`,
      ...this.props.chartOpts,
    });
  }

  render() {
    return (
      <div style={s} id={this.props.chartID} />
    );
  }
}

export default Chart;
