import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CenteredContent } from 'ro-component-library';
import { GaugeBlockArrayNoDataContent } from './particles/GaugeBlockArrayNoDataContent';
import { subscribeToNewPoints } from './actions/subscribeToNewPoints';
import { PointGaugeBlock } from './particles/PointGaugeBlock';


class BaseGaugeBlockArray extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    subscribeToNewPoints(this.props.points)(dispatch);
  }

  render() {
    const inputs = Object.keys(this.props.inputs);
    return (!inputs.length) ?
      <GaugeBlockArrayNoDataContent /> : (
        <CenteredContent>
          {inputs.map(id => (<PointGaugeBlock
            {...this.props}
            key={id}
            input={this.props.inputs[id]}
            id={id}
          />))}
        </CenteredContent>
      );
  }
}

const mapStateToProps = state => ({
  ...state.GaugeBlockArrayReducer,
});

const GaugeBlockArray = connect(mapStateToProps, null)(BaseGaugeBlockArray);
export { GaugeBlockArray };
