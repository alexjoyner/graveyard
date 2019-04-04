// import React from 'react';
// import { connect } from 'react-redux';
// import { GaugeBlock } from '../PointGauge';
// import { multiSelectPoint, multiDeselectPoint } from '../../ducks/gauges.duck';

// export const TLivePointGauge = (props) => {
//   const { point } = props;
//   return (
//     <GaugeBlock
//       {...point.settings}
//       overrides={{
//         GaugeBlockStatus: {
//           component: () => null,
//         },
//         GaugeBlockSettingsBtn: {
//           component: () => null,
//         },
//       }}
//       value={point.value || 0}
//       label={point.name}
//       multiSelected={point.multiSelected}
//       height="10vh"
//       panelWidth="20%"
//       onChartClick={() => {
//         props.multiSelectPoint(point, props.id);
//       }}
//       onSettingsClick={() => {
//         throw new Error('No on settings click implementation');
//       }}
//     />
//   );
// };

// const LivePointGauge = connect(null, {
//   multiSelectPoint,
//   multiDeselectPoint,
// })(TLivePointGauge);

// export { LivePointGauge };
