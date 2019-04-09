import React, { useState } from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';
import { NullComp } from '../../../../shared/components/NullComp';

const Body = () => {
	const [points, setPoints] = useState({});
	return (
		<HeaderSideBarPageBody>
			<NullComp />
		</HeaderSideBarPageBody>
	);
};

export { Body };
