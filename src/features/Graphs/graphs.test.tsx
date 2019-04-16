import React, { useContext } from 'react';
import { FeaturesContext } from '../../shared/AppBuilder/featuresContext';
import { RenderResult, render, fireEvent, wait } from 'react-testing-library';
import { TestApp } from '../../shared/AppBuilder/test-utils';
import { GraphsFeature } from './graphs';
import { StoreContext } from '../../shared/AppBuilder/storeContext';
import { buildGraph } from './ducks/graphs.duck';
import { PointsObject } from '../../shared/types/oee-master/points';
import { withToast } from '../../shared/testUtils/withToast';

const TestGraphData: PointsObject = {
  1: {
    settings: {
      max: 100,
      min: 0,
      units: 'Q',
      ranges: [{
        lowerValue: 0,
        upperValue: 100,
        alertLevel: 'danger',
        color: 'danger',
      }]
    },
    id: 1,
    name: 'Crazy Machine Temp',
    data: [[123, 123456]]
  }
}
const GraphImplement = withToast(() => {
  const { Graphs } = useContext(FeaturesContext);
  const [state, dispatch] = useContext(StoreContext);
  const { GraphModal } = Graphs;
  return (
    <>
      <GraphModal />
      <button onClick={() => dispatch(buildGraph(TestGraphData))}>Launch Graph</button>
    </>
  )
})

describe('Graphs Feature', () => {
  let utils: RenderResult;
  beforeEach(() => {
    const Base = TestApp({
      children: <GraphImplement />
    })
    const Test = Base.addFeatures([GraphsFeature]);
    const Root = Test.Run({});
    utils = render(<>{Root}</>);
  });
  it('Should not show graph by default', async () => {
    const { getByText } = utils;
    fireEvent.click(getByText('Launch Graph'));
    await wait(() => {
      expect(getByText('Historical Data View')).toBeDefined();
      expect(getByText('Crazy Machine Temp (Q)')).toBeDefined();
    })
  })
})