import React from 'react';
import C3Chart from 'react-c3js';

const data = {
  type: 'gauge',
  columns: [['data', 90.4]],
};

class Guage extends React.Component {
  render() {
    return (
      <div>
        <C3Chart data={data} />
      </div>
    );
  }
}

export default Guage;
