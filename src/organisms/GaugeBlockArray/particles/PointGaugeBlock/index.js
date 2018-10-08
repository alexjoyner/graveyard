import React from 'react';
import { GaugeBlock } from 'ro-component-library';
import { connect } from 'react-redux';
import { multiSelectPoint, multiDeselectPoint } from '../../actions/multiSelectPoint';

export const BasePointGaugeBlock = (props) => {
  const { input } = props;
  return (<GaugeBlock
    {...input.settings}
    value={input.value || 0}
    label={input.name}
    multiSelected={input.multiSelected}
    height="10vh"
    onChartClick={() => {
      props.multiSelectPoint(input, props.id);
      setTimeout(() => {
        props.multiDeselectPoint(props.id);
      }, 2000);
    }}
    onSettingsClick={() => {
      throw new Error('No on settings click implementation');
    }}
  />);
};

const PointGaugeBlock = connect(null, {
  multiSelectPoint,
  multiDeselectPoint,
})(BasePointGaugeBlock);

export { PointGaugeBlock };

