import React, { useContext } from 'react';
import { FeedbackFeature } from './feedback';
import { FeaturesContext } from '../../shared/AppBuilder/featuresContext';
import { RenderResult, } from 'react-testing-library';
import { TestApp, render } from '../../shared/AppBuilder/test-utils';

const FeedbackImplement = () => {
  const { Feedback } = useContext(FeaturesContext);
  const { FeedbackButton } = Feedback;

  return <FeedbackButton />
}

describe('Feedback Feature', () => {
  let utils: RenderResult;
  beforeEach(() => {
    const Base = TestApp({
      children: <FeedbackImplement />
    });
    const Test = Base.addFeatures([FeedbackFeature])
    const Root = Test.Run({})
    utils = render(<>{Root}</>)
  });
  test('Should render the feedback button', async () => {
    const { getByText } = utils;
    expect(getByText('Feedback')).toBeDefined();
  })
})