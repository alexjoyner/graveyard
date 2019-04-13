// import React from 'react';
// import PropTypes from 'prop-types';
// import { GoGraph, GoGear, GoCheck } from 'react-icons/go';
// import { getComponents } from 'ro-component-library/utils/getComponents';
// import defaults from './defaults';

// const GaugeBlock = (props) => {
//   const {
//     multiSelected, onChartClick, onSettingsClick, label, overrides,
//   } = props;
//   const {
//     GaugeBlockContainer: { component: GaugeBlockContainer, props: gaugeBlockContainerProps },
//     GaugeBlockToolbar: { component: GaugeBlockToolbar, props: gaugeBlockToolbarProps },
//     GaugeBlockChartsBtn: { component: GaugeBlockChartsBtn, props: gaugeBlockChartsBtnProps },
//     GaugeBlockSettingsBtn: { component: GaugeBlockSettingsBtn, props: gaugeBlockSettingsBtnProps },
//     GaugeBlockGauge: { component: GaugeBlockGauge, props: gaugeBlockGaugeProps },
//     GaugeBlockLabel: { component: GaugeBlockLabel, props: gaugeBlockLabelProps },
//     GaugeBlockStatus: { component: GaugeBlockStatus, props: gaugeBlockStatusProps },
//   } = getComponents(defaults, overrides);
//   return (
//     <GaugeBlockContainer onClick={onChartClick} width="20%" {...gaugeBlockContainerProps}>
//       <GaugeBlockToolbar {...gaugeBlockToolbarProps}>
//         {(multiSelected) ? (
//           <GaugeBlockChartsBtn size="compact" {...gaugeBlockChartsBtnProps}>
//             <GoCheck size={20} />
//           </GaugeBlockChartsBtn>
//         ) : (
//           <GaugeBlockChartsBtn size="compact" {...gaugeBlockChartsBtnProps}>
//             <GoGraph size={20} />
//           </GaugeBlockChartsBtn>
//         )}
//         <GaugeBlockSettingsBtn size="compact" onClick={onSettingsClick} {...gaugeBlockSettingsBtnProps}>
//           <GoGear size={20} />
//         </GaugeBlockSettingsBtn>
//       </GaugeBlockToolbar>
//       <GaugeBlockGauge
//         {...props}
//         {...gaugeBlockGaugeProps}
//       />
//       <GaugeBlockLabel {...gaugeBlockLabelProps}>
//         {label}
//       </GaugeBlockLabel>
//       <GaugeBlockStatus {...gaugeBlockStatusProps}>
//         <span>live data</span>
//       </GaugeBlockStatus>
//     </GaugeBlockContainer>
//   );
// };

// GaugeBlock.propTypes = {
//   panelWidth: PropTypes.string,
//   label: PropTypes.string.isRequired,
//   onChartClick: PropTypes.func.isRequired,
//   onSettingsClick: PropTypes.func.isRequired,
//   multiSelected: PropTypes.bool,
// };

// GaugeBlock.defaultProps = {
//   panelWidth: '20%',
//   multiSelected: false,
// };

// export { GaugeBlock };
export const test = 1;