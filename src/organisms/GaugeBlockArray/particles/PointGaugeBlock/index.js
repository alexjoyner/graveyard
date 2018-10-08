import React from 'react';
import { GaugeBlock } from 'ro-component-library';
import { connect } from 'react-redux';
import { multiSelectPoint, multiDeselectPoint } from '../../actions/multiSelectPoint';

export const BasePointGaugeBlock = (props) => {
  const { point } = props;
  return (<GaugeBlock
    {...point.settings}
    value={point.value || 0}
    label={point.name}
    multiSelected={point.multiSelected}
    height="10vh"
    onChartClick={() => {
      props.multiSelectPoint(point, props.id);
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

