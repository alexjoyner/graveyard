import React from 'react';
import { GaugeBlock } from 'ro-component-library';
import { connect } from 'react-redux';
import { multiSelectPoint, multiDeselectPoint } from '../../actions/multiSelectPoint';

export const BasePointGaugeBlock = (props) => {
  const { input } = props;
  let opts = {
    min: 0,
    max: 100,
  };
  if (input.unit === 'F') opts = props.temp;
  if (input.unit === 'CFM') opts = props.cfm;
  if (input.unit === 'A') opts = props.amps;
  if (input.unit === 'PSI') opts = props.psi;
  if (input.unit === 'in/sec') opts = props.vibration;
  return (<GaugeBlock
    {...opts}
    value={input.value}
    label={input.name}
    multiSelected={input.multiSelected}
    height="10vh"
    onChartClick={() => {
      props.multiSelectPoint(input, props.id);
    }}
    onSettingsClick={() => console.log('implement onSettingsClick')}
  />);
};

const PointGaugeBlock = connect(null, {
  multiSelectPoint,
  multiDeselectPoint,
})(BasePointGaugeBlock);

export { PointGaugeBlock };

