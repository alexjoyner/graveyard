import React, { useState } from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';
import { NoComp } from '../../../../shared/components/NoComp';

const Body = () => {
	const [points, setPoints] = useState({});
	return (
		<HeaderSideBarPageBody>
			<NoComp />
		</HeaderSideBarPageBody>
	);
};

export { Body };
