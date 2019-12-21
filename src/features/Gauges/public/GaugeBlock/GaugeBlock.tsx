import React, { FC } from 'react';
import { styled } from 'ro-component-library/utils/styled';
import { Panel } from 'ro-component-library/Panel';
import { Gauge } from 'ro-component-library/Gauge';
import { GaugeSettings } from '../../types/gauges';

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
  settings: GaugeSettings,
  name: string,
  onChartClick: () => void
}

const GaugeBlock: FC<GaugeBlockProps> = ({ value, settings, name, onChartClick }) => {
  return (
    <Panel onClick={onChartClick} width="20%">
      <GaugeBlockToolbar>
      </GaugeBlockToolbar>
      <Gauge
        value={value}
        units={settings.units}
        max={settings.max}
        min={settings.min}
        ranges={settings.ranges}
      />
      <GaugeBlockLabel>
        {name}
      </GaugeBlockLabel>
      <StatusLabel>
      </StatusLabel>
    </Panel>
  );
};


export { GaugeBlock };