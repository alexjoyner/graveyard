import React from 'react';
import C3Chart from 'react-c3js';

const data = {
  type: 'gauge',
  columns: [['data', 90.4]],
};
const gaugeSpecs = {
  label: {
    format: value => value,
    show: true, // to turn off the min/max labels.
  },
  units: 'F',
};

class Guage extends React.Component {
  render() {
    return (
      <div>
        <C3Chart data={data} gauge={gaugeSpecs} size={{ height: 180 }} />
      </div>
    );
  }
}

export default Guage;
