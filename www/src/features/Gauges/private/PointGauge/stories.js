import React, { Component } from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { GaugeBlock } from '.';

export class TestGaugeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 20,
      units: '°F',
      max: 100,
      min: 0,
      ranges: [{
        lowerValue: 0,
        upperValue: 20,
        alertLevel: 'primary',
      }, {
        lowerValue: 20,
        upperValue: 30,
        alertLevel: 'info',
      }, {
        lowerValue: 30,
        upperValue: 50,
        alertLevel: 'warning',
      }, {
        lowerValue: 50,
        upperValue: 80,
        alertLevel: 'success',
      }, {
        lowerValue: 80,
        upperValue: 100,
        alertLevel: 'dangerLight',
      }],
    };
  }

  componentDidMount() {
    setInterval(() => {
      const { value } = this.state;
      if (value === 100) return;
      this.setState({
        value: value + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <GaugeBlock
          id={1}
          {...this.state}
          label="Sensor 1"
          onSettingsClick={() => console.log('onSettingsClick')}
          onChartClick={() => console.log('onChartClick')}
          overrides={{
            GaugeBlockChartsBtn: {
              props: {
                color: 'primary',
              },
            },
          }}
        />
        <GaugeBlock
          id={2}
          {...this.state}
          multiSelected
          label="Sensor 1"
          onSettingsClick={() => console.log('onSettingsClick')}
          onChartClick={() => console.log('onChartClick')}
        />
      </div>
    );
  }
}


storiesOf('Depreciated', module)
  .add('GaugeBlock', () => (
    <TestGaugeBlock />
  ));
