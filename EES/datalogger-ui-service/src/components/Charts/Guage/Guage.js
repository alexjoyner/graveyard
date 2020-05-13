import React from 'react';
import C3Chart from 'react-c3js';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import s from 'c3/c3.css';

class Guage extends React.Component {
  static get propTypes() {
    return {
      initData: PropTypes.object.isRequired,
    };
  }
  constructor(props) {
    super();
    this.state = props.initData;
  }

  componentDidMount() {}

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
          transition={this.state.transition}
        />
      </div>
    );
  }
}

export default withStyles(s)(Guage);
