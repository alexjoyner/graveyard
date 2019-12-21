import React, { useContext } from 'react';
import { TutorialFeature } from './tutorial';
import { FeaturesContext } from '../../shared/AppBuilder/featuresContext';
import { RenderResult, } from 'react-testing-library';
import { TestApp, render } from '../../shared/AppBuilder/test-utils';

const TutorialImplement = () => {
  const { Tutorial } = useContext(FeaturesContext);
  const { TutorialButton } = Tutorial;

  return <TutorialButton />
}

describe('Tutorial Feature', () => {
  let utils: RenderResult;
  beforeEach(() => {
    const Base = TestApp({
      children: <TutorialImplement />
    });
    const Test = Base.addFeatures([TutorialFeature])
    const Root = Test.Run({})
    utils = render(<>{Root}</>)
  });
  test('Should render the tutorial button', async () => {
    const { getByText } = utils;
    expect(getByText('Help')).toBeDefined();
  })
})