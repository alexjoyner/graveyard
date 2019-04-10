import React, { FC } from 'react';
// import PropTypes from 'prop-types';
// import { GoGraph, GoGear, GoCheck } from 'react-icons/go';
import { styled } from 'ro-component-library/utils/styled';
import { Panel } from 'ro-component-library/Panel';
import { Gauge } from 'ro-component-library/Gauge';

const StatusLabel: FC = ({ children, ...props }) => (
  <span style={{ fontSize: '13px' }} {...props}>
    {children}
  </span>
);

const GaugeBlockToolbar = styled(
  'div',
  () => ({
    position: 'absolute',
    right: '5px',
    top: '5px',
  }),
);

const GaugeBlockLabel = styled(
  'div',
  () => ({
    fontSize: '20px',
    fontWeight: 400,
    textAlign: 'center',
  }),
);

// const GaugeBlockChartsBtn = styled(
//   RoBaseButton,
//   ({ $theme }) => ({
//     paddingRight: $theme.sizing.scale100,
//     paddingLeft: $theme.sizing.scale100,
//     paddingTop: $theme.sizing.scale100,
//     paddingBottom: $theme.sizing.scale100,
//   }),
// );


export type GaugeBlockProps = {
  value: number,
  name: string,
  onChartClick: () => void
}

const GaugeBlock: FC<GaugeBlockProps> = ({ value, name, onChartClick }) => {
  return (
    <Panel onClick={onChartClick} width="20%">
      <GaugeBlockToolbar>

      </GaugeBlockToolbar>
      <Gauge
        value={value}
      />
      <GaugeBlockLabel>
        {name}
      </GaugeBlockLabel>
      <StatusLabel>
        <span>live data</span>
      </StatusLabel>
    </Panel>
  );
};

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


export { GaugeBlock };