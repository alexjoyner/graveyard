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
    const { currentGroup } = this.props;
    this.handleSubscribeToGroup(currentGroup);
  }

  componentDidUpdate(prevProps) {
    const { currentGroup } = this.props;
    if (currentGroup !== prevProps.currentGroup) {
      this.handleRemoveAllPoints();
      this.handleSubscribeToGroup(currentGroup);
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
    /* istanbul ignore next */
    this.socket.subscribe(pointsIdArray, (err, log) => {
      this.props.publishNewLog(log);
    });
  }

  render() {
    const { points } = this.props;
    const groupPoints = Object.keys(points);
    return (!groupPoints.length)
      ? <GaugeBlockArrayNoDataContent /> : (
        <CenteredContent>
          {groupPoints.map(id => (
            <PointGaugeBlock
              {...this.props}
              key={id}
              point={points[id]}
              id={id}
            />
          ))}
        </CenteredContent>
      );
  }
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  ...state.GaugeBlockArrayReducer,
});

const GaugeBlockArray = connect(mapStateToProps, {
  publishNewPoints,
  publishNewLog,
  removeAllPoints,
})(BaseGaugeBlockArray);
export { GaugeBlockArray };
