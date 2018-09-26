import React from 'react';
import { GaugeBlock } from 'ro-component-library';
import { multiSelectPoint } from '../../actions/multiSelectPoint';


export const PointGaugeBlock = (props) => {
  let input = props.input;
  let opts = {
    min: 0,
    max: 100,
  };
  if(input.unit === 'F') opts = props.temp;
  if(input.unit === 'CFM') opts = props.cfm;
  if(input.unit === 'A')  opts = props.amps;
  if(input.unit === 'PSI')  opts = props.psi;
  if(input.unit === 'in/sec')  opts = props.vibration;
  return <GaugeBlock 
    {...opts}
    value={input.value} 
    label={input.name}
    multiSelected={input.multiSelected}
    height={'10vh'}
    onClick={() => multiSelectPoint(input, props.id)(props.dispatch)}></GaugeBlock>
}