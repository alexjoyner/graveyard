import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CenteredContent } from 'ro-component-library';
import { GaugeBlockArrayNoDataContent } from './particles/GaugeBlockArrayNoDataContent';
import { publishNewLog, removeAllPoints } from './actions/managePoints';
import { PointGaugeBlock } from './particles/PointGaugeBlock';
import { PointsSocket } from '../../behaviors/iSocketIO';
import { getPointsFromGroupID } from './utils/getPointsFromGroupID';

const socket = new PointsSocket();


class BaseGaugeBlockArray extends Component {
  componentDidMount() {
    socket.subscribe(this.props.points, (err, log) => {
      this.props.publishNewLog(log);
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentGroup !== prevProps.currentGroup) {
      this.handleChangeGroup(this.props.currentGroup);
    }
  }
  async handleChangeGroup(groupID) {
    socket.unsubscribe();
    this.props.removeAllPoints();
    const allPoints = await getPointsFromGroupID(groupID);
    socket.subscribe(allPoints, (err, log) => {
      this.props.publishNewLog(log);
    });
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

const GaugeBlockArray = connect(mapStateToProps, {
  publishNewLog,
  removeAllPoints,
})(BaseGaugeBlockArray);
export { GaugeBlockArray };
