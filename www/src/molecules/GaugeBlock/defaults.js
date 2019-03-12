import React from 'react';
import { styled } from 'ro-component-library/utils/styled';
import { Panel } from 'ro-component-library/Panel';
import { Gauge } from 'ro-component-library/Gauge';
import { Button } from 'ro-component-library/Button';
import { RoBaseButton } from 'ro-component-library/Button/models/baseUI';

const StatusLabel = ({ children, ...props }) => (
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

const GaugeBlockChartsBtn = styled(
  RoBaseButton,
  ({ $theme }) => ({
    paddingRight: $theme.sizing.scale100,
    paddingLeft: $theme.sizing.scale100,
    paddingTop: $theme.sizing.scale100,
    paddingBottom: $theme.sizing.scale100,
  }),
);

export default {
  GaugeBlockContainer: Panel,
  GaugeBlockToolbar,
  GaugeBlockChartsBtn,
  GaugeBlockSettingsBtn: Button,
  GaugeBlockGauge: Gauge,
  GaugeBlockLabel,
  GaugeBlockStatus: StatusLabel,
};
