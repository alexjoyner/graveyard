import React, { useContext } from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';
import { StoreContext } from '../../../utils/AppBuilder/storeContext';
import { FeaturesContext } from '../../../utils/AppBuilder/featuresContext';

const Body = () => {
	const [state] = useContext(StoreContext);
	const features = useContext(FeaturesContext);
	const {
		Body: { contents }
	} = state;
	const {
		Timeline: { Post },
		Brand: { MinimalBackground }
	} = features;
	return (
		<MinimalBackground>
			<h1>{contents}</h1>
			<Post />
		</MinimalBackground>
	);
};

export { Body };
