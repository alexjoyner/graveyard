import React from 'react';
import {NavBar} from '../../utils/navbar';
require('./_.sass');

const HomeUI = ({props}) => {
	return (
		<div>
			<NavBar {...props} />
		</div>
	);
};

export {HomeUI};
