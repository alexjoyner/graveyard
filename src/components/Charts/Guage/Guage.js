import React from 'react';
import C3Chart from 'react-c3js';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import s from 'c3/c3.css';

class Guage extends React.Component {
  static get displayName() {
    return 'DynamicChart';
  }

  static get propTypes() {
    return {
      initData: PropTypes.object.isRequired,
      newData: PropTypes.object,
    };
  }
  static get defaultProps() {
    return {
      newData: {},
    };
  }
  constructor(props) {
    super();
    this.state = props.initData;
  }

  componentDidMount() {
    if (this.props.newData) {
      setInterval(() => {
        const newState = this.state;
        newState.data.columns[0][1] += 10;
        this.setState(newState);
      }, 1000);
    }
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
          axis={this.state.axis}
          unloadBeforeLoad
        />
      </div>
    );
  }
}

export default withStyles(s)(Guage);
