import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CenteredContent } from 'ro-component-library';
import { GaugeBlockArrayNoDataContent } from './particles/GaugeBlockArrayNoDataContent';
import { publishNewPoints, publishNewLog, removeAllPoints } from './actions/managePoints';
import { PointGaugeBlock } from './particles/PointGaugeBlock';
import { PointsSocket } from '../../behaviors/iSocketIO';
import { getPointsFromGroupID } from './utils/getPointsFromGroupID';

export class BaseGaugeBlockArray extends Component {
  constructor(props) {
    super(props);
    /* istanbul ignore next */
    this.socket = props.socket || new PointsSocket({});
  }
  componentDidMount() {
    this.handleSubscribeToGroup(this.props.currentGroup);
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentGroup !== prevProps.currentGroup) {
      this.handleRemoveAllPoints();
      this.handleSubscribeToGroup(this.props.currentGroup);
    }
  }
  handleRemoveAllPoints() {
    this.socket.unsubscribe();
    this.props.removeAllPoints();
  }
  async handleSubscribeToGroup(groupID) {
    const groupPoints = await getPointsFromGroupID(groupID);
    this.props.publishNewPoints(groupPoints);
    const pointsIdArray = Object.keys(groupPoints);
    this.socket.subscribe(pointsIdArray, (err, log) => {
      /* istanbul ignore next */
      this.props.publishNewLog(log);
    });
  }
  render() {
    const points = Object.keys(this.props.points);
    return (!points.length) ?
      <GaugeBlockArrayNoDataContent /> : (
        <CenteredContent>
          {points.map(id => (<PointGaugeBlock
            {...this.props}
            key={id}
            point={this.props.points[id]}
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
  publishNewPoints,
  publishNewLog,
  removeAllPoints,
})(BaseGaugeBlockArray);
export { GaugeBlockArray };
