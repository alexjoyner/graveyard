import React from 'react';
import {Link} from 'react-router';
require('./_.sass');

const HeroImage = ({props}) => {
	return (
		<div className="hero-image">
			<div className="hero-text">
				<h1>BullSweet Fitness</h1>
			</div>
		</div>
	)
};

export {HeroImage};
