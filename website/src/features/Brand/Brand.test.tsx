import React, { useContext } from 'react';
import { render, TestApp, wait } from '../../utils/AppBuilder/test-utils';
import { FeaturesContext } from '../../utils/AppBuilder/featuresContext';
import { StoreContext } from '../../utils/AppBuilder/storeContext';
import { BrandFeature } from './Brand';
import { RenderResult, fireEvent } from 'react-testing-library';
import { INITIAL_STATE } from './ducks/brand.duck';
import { async } from 'q';

const BrandImplement = () => {
  // The following comment is an example of how you could set up this component
	// const { Brand } = useContext(FeaturesContext);
	// const [state] = useContext(StoreContext);
	// const { BrandButton } = Brand;
	return (
		<>
      {/* Place the basic implementation of your features public components here*/}
		</>
	);
};

describe('Brand feature', () => {
	let utils: RenderResult;
	beforeEach(() => {
		window.location.reload = jest.fn();
		const Base = TestApp({
			children: <BrandImplement />
		});
		const Test = Base.addFeatures([BrandFeature]);
		const Root = Test.Run({});
		utils = render(<>{Root}</>);
	});
});
