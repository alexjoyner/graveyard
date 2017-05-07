import React from 'react';
import {NavBar} from '../../utils/navbar';
import {HeroImage} from '../../utils/heroImage';
require('./_.sass');

const HomeUI = ({props}) => {
	return (
		<div>
			<NavBar {...props} />
			<HeroImage {...props}/>
		</div>
	);
};

export {HomeUI};
