// import React, { useState, useEffect } from 'react';
// import _ from 'lodash';
// import PropTypes from 'prop-types';
// import { DashBodyNoDataContent } from './particles/DashBodyNoDataContent';
// import { LivePointGauge } from './particles/LivePointGauge';
// import { getPointsFromGroupID } from './utils/getPointsFromGroupID';

// const TDashBody = ({ currentGroup }) => {
//   const [points, setPoints] = useState({});
//   const handleSubscribeToGroup = async (groupID) => {
//     const newPoints = await getPointsFromGroupID(groupID);
//     setPoints(newPoints);
//     // publishNewPoints(groupPoints);
//     // const pointsIdArray = Object.keys(groupPoints);
//     // socket.subscribe(pointsIdArray, (err, log) => {
//     //   publishNewLog(log);
//     // });
//   };
//   useEffect(() => {
//     handleSubscribeToGroup(currentGroup);
//   }, []);
//   return (_.isEmpty(points)) ? (
//     <DashBodyNoDataContent />
//   ) : (
//     <>
//       {Object.keys(points).map(id => (
//         <LivePointGauge key={id} />
//       ))}
//     </>
//   );
// };
// TDashBody.propTypes = {
//   currentGroup: PropTypes.number.isRequired,
// };

// export { TDashBody };
