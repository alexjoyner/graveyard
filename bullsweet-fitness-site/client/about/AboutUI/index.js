import React from 'react';
import {NavBar} from '../../utils/navbar';
const AboutUI = ({props}) => {
	return (
		<div>
			<NavBar {...props}/>
			<h1>About Page</h1>
		</div>
	)
};

export {AboutUI}
