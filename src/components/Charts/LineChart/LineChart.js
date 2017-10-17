import React from 'react';
import C3Chart from 'react-c3js';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import s from 'c3/c3.css';

class LineChart extends React.Component {
  static get displayName() {
    return 'DynamicChart';
  }

  static get propTypes() {
    return {
      initData: PropTypes.object.isRequired,
    };
  }

  constructor(props) {
    super();
    this.state = props.initData;
  }

  componentDidMount() {
    setInterval(() => {
      const newState = this.state;
      newState.data.columns[0][1] += 10;
      this.setState(newState);
    }, 1000);
  }

  render() {
    return (
      <div>
        <C3Chart
          styles={s}
          data={this.state.data}
          gauge={this.state.specs}
          size={{ height: 180 }}
          color={this.state.color}
          unloadBeforeLoad
        />
      </div>
    );
  }
}

export default withStyles(s)(LineChart);
