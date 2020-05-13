import React, { useContext } from 'react';
import { render, TestApp, wait } from '../../utils/AppBuilder/test-utils';
import { FeaturesContext } from '../../utils/AppBuilder/featuresContext';
import { StoreContext } from '../../utils/AppBuilder/storeContext';
import { TimelineFeature } from './Timeline';
import { RenderResult, fireEvent } from 'react-testing-library';
import { INITIAL_STATE } from './ducks/timeline.duck';
import { async } from 'q';

const TimelineImplement = () => {
  // The following comment is an example of how you could set up this component
	// const { Timeline } = useContext(FeaturesContext);
	// const [state] = useContext(StoreContext);
	// const { TimelineButton } = Timeline;
	return (
		<>
      {/* Place the basic implementation of your features public components here*/}
		</>
	);
};

describe('Timeline feature', () => {
	let utils: RenderResult;
	beforeEach(() => {
		window.location.reload = jest.fn();
		const Base = TestApp({
			children: <TimelineImplement />
		});
		const Test = Base.addFeatures([TimelineFeature]);
		const Root = Test.Run({});
		utils = render(<>{Root}</>);
	});
});
