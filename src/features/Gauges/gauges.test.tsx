import React, { useContext, FC } from 'react';
import { FeaturesContext } from '../../shared/AppBuilder/featuresContext';
import { GaugeBlockProps } from './public/GaugeBlock/GaugeBlock';
import { RenderResult, render, fireEvent } from 'react-testing-library';
import { TestApp } from '../../shared/AppBuilder/test-utils';
import { GaugesFeature } from './gauges';

const TestGaugeSettings: GaugeBlockProps = {
  value: 20,
  name: 'Test Gauge',
  onChartClick: jest.fn(),
  settings: {
    units: 'F',
    max: 100,
    min: 0,
    ranges: [{
      lowerValue: 0,
      upperValue: 100,
      alertLevel: 'danger',
      color: 'danger'
    }]
  }
}
const GaugesImplement = () => {
  const { Gauges } = useContext(FeaturesContext);
  const { GaugeBlock }: { GaugeBlock: FC<GaugeBlockProps> } = Gauges;
  return <GaugeBlock {...TestGaugeSettings} />
}


describe('Gauges Feature', () => {
  let utils: RenderResult;
  beforeEach(() => {
    const Base = TestApp({
      children: <GaugesImplement />
    });
    const Test = Base.addFeatures([GaugesFeature])
    const Root = Test.Run({})
    utils = render(<>{Root}</>)
  });
  test('Should render the gaugeblock', async () => {
    const { getByText } = utils;
    expect(getByText('Test Gauge')).toBeDefined();
    expect(getByText('20F')).toBeDefined();
  })
  test('Calls the onChartClick handler', () => {
    const { getByText } = utils;
    expect(TestGaugeSettings.onChartClick).toBeCalledTimes(0);
    fireEvent.click(getByText('Test Gauge'));
    expect(TestGaugeSettings.onChartClick).toBeCalledTimes(1);
  });
})