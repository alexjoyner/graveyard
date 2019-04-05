import React, { useState } from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';

const Body = () => {
	const [points, setPoints] = useState({});
	return (
		<HeaderSideBarPageBody>
			<h1>Dash Body</h1>
		</HeaderSideBarPageBody>
	);
};

export { Body };
