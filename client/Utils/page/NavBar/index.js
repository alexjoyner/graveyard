import React from 'react';
require('./_.sass');


const NavBar = (props) => {
	return (
		<div>
			<div className="NavBar">
				<a>Check In</a>
				<a>Check Out</a>
			</div>
		</div>
	);
};

export {NavBar};
