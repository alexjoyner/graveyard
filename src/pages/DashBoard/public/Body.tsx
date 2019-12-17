import React, { useContext } from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';
import { StoreContext } from '../../../utils/AppBuilder/storeContext';

const Body = () => {
	const [state] = useContext(StoreContext);
	const {
		Body: { contents }
	} = state;
	return (
		<HeaderSideBarPageBody>
			<h1>{contents}</h1>
		</HeaderSideBarPageBody>
	);
};

export { Body };
