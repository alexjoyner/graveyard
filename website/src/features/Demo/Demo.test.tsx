import React, { useContext } from 'react';
import { render, TestApp, wait } from '../../utils/AppBuilder/test-utils';
import { FeaturesContext } from '../../utils/AppBuilder/featuresContext';
import { StoreContext } from '../../utils/AppBuilder/storeContext';
import { DemoFeature } from './Demo';
import { RenderResult, fireEvent } from 'react-testing-library';
import { INITIAL_STATE } from './ducks/demo.duck';
import { async } from 'q';

const DemoImplement = () => {
	// The following comment is an example of how you could set up this component
	const { Demo } = useContext(FeaturesContext);
	const [state] = useContext(StoreContext);
	const { DemoButton } = Demo;
	return (
		<>
			{/* Place the basic implementation of your features public components here*/}
		</>
	);
};

describe('Demo feature', () => {
	let utils: RenderResult;
	beforeEach(() => {
		window.location.reload = jest.fn();
		const Base = TestApp({
			children: <DemoImplement />
		});
		const Test = Base.addFeatures([DemoFeature]);
		const Root = Test.Run({});
		utils = render(<>{Root}</>);
	});

	it('Should render Welcome to My Personal Website', () => {});
});
