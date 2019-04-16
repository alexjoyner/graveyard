import React, { useContext } from 'react';
import { FeaturesFeature } from './Features';
import { render, TestApp, wait } from '../../shared/AppBuilder/test-utils';
import { FeaturesContext } from '../../shared/AppBuilder/featuresContext';
import { RenderResult, fireEvent } from 'react-testing-library';
import { StoreContext } from '../../shared/AppBuilder/storeContext';
import { INITIAL_STATE } from './ducks/features.duck';


const FeaturesImplement = () => {
  const { Features } = useContext(FeaturesContext);
  const [state] = useContext(StoreContext);
  const { FeaturesButton } = Features;
  return (
    <>
      <FeaturesButton />
      {JSON.stringify(state.Features)}
    </>
  )
}

describe('Features feature', () => {
  let utils: RenderResult;
  beforeEach(() => {
    window.location.reload = jest.fn();
    const Base = TestApp({
      children: <FeaturesImplement />
    });
    const Test = Base.addFeatures([FeaturesFeature]);
    const Root = Test.Run({});
    utils = render(<>{Root}</>)
  })
  test('correctly sets localstorage with no features selected', () => {
    const { getByText } = utils;
    const FeaturesState = { ...INITIAL_STATE };
    expect(localStorage.setItem).toBeCalledTimes(0);
    expect(window.location.reload).toBeCalledTimes(0);
    fireEvent.click(getByText('Features'));
    fireEvent.click(getByText('Update App'));
    expect(window.location.reload).toBeCalledTimes(1);
    expect(localStorage.setItem).toBeCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenLastCalledWith('Features', JSON.stringify(FeaturesState));
  })
  test('allows toggling graphs', async () => {
    const { getByText, getByLabelText, getByTestId } = utils;
    const FeaturesState = { ...INITIAL_STATE, Graphs: !INITIAL_STATE.Graphs };
    expect(localStorage.setItem).toBeCalledTimes(0);
    expect(window.location.reload).toBeCalledTimes(0);
    fireEvent.click(getByText('Features'));
    fireEvent.click(getByLabelText('Graphs'));
    fireEvent.click(getByText('Update App'));
    expect(window.location.reload).toBeCalledTimes(1);
    expect(localStorage.setItem).toBeCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenLastCalledWith('Features', JSON.stringify(FeaturesState));
  })
  test('allows toggling groups', async () => {
    const { getByText, getByLabelText } = utils;
    const FeaturesState = { ...INITIAL_STATE, Groups: !INITIAL_STATE.Groups };
    expect(localStorage.setItem).toBeCalledTimes(0);
    expect(window.location.reload).toBeCalledTimes(0);
    fireEvent.click(getByText('Features'));
    fireEvent.click(getByLabelText('Groups'));
    fireEvent.click(getByText('Update App'));
    expect(window.location.reload).toBeCalledTimes(1);
    expect(localStorage.setItem).toBeCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenLastCalledWith('Features', JSON.stringify(FeaturesState));
  })
  test('allows toggling gauges', async () => {
    const { getByText, getByLabelText } = utils;
    const FeaturesState = { ...INITIAL_STATE, Gauges: !INITIAL_STATE.Gauges };
    expect(localStorage.setItem).toBeCalledTimes(0);
    expect(window.location.reload).toBeCalledTimes(0);
    fireEvent.click(getByText('Features'));
    fireEvent.click(getByLabelText('Live Gauges'));
    fireEvent.click(getByText('Update App'));
    expect(window.location.reload).toBeCalledTimes(1);
    expect(localStorage.setItem).toBeCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenLastCalledWith('Features', JSON.stringify(FeaturesState));
  })
});