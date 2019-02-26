import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CenteredContent } from 'ro-component-library/CenteredContent';
import { DashBodyNoDataContent } from './particles/DashBodyNoDataContent';
import {
  publishNewPoints as publishNewPointsAction,
  publishNewLog as publishNewLogAction,
  removeAllPoints as removeAllPointsAction,
} from './actions/managePoints';
import { LivePointGauge } from './particles/LivePointGauge';
import { PointsSocket } from '../../behaviors/PointsSocket';
import { getPointsFromGroupID } from './utils/getPointsFromGroupID';

export const TDashBody = ({
  currentGroup, socket, points,
  publishNewPoints, publishNewLog, removeAllPoints, ...props
}) => {
  let groupPoints = Object.keys(points);
  const handleSubscribeToGroup = async (groupID) => {
    socket.unsubscribe();
    removeAllPoints();
    groupPoints = await getPointsFromGroupID(groupID);
    publishNewPoints(groupPoints);
    const pointsIdArray = Object.keys(groupPoints);
    socket.subscribe(pointsIdArray, (err, log) => {
      publishNewLog(log);
    });
  };
  useEffect(() => {
    handleSubscribeToGroup(currentGroup);
  }, [currentGroup]);
  return (!groupPoints.length)
    ? <DashBodyNoDataContent /> : (
      <CenteredContent>
        {groupPoints.map(id => (
          <LivePointGauge
            {...props}
            key={id}
            point={points[id]}
            id={id}
          />
        ))}
      </CenteredContent>
    );
};
TDashBody.propTypes = {
  currentGroup: PropTypes.number.isRequired,
  socket: PropTypes.instanceOf(PointsSocket),
  points: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.value,
  })).isRequired,
  publishNewPoints: PropTypes.func.isRequired,
  publishNewLog: PropTypes.func.isRequired,
  removeAllPoints: PropTypes.func.isRequired,
};
TDashBody.defaultProps = {
  socket: new PointsSocket({}),
};

/* istanbul ignore next */
const mapStateToProps = state => ({
  ...state.DashBodyReducer,
});

const DashBody = connect(mapStateToProps, {
  publishNewPoints: publishNewPointsAction,
  publishNewLog: publishNewLogAction,
  removeAllPoints: removeAllPointsAction,
})(TDashBody);
export { DashBody };
