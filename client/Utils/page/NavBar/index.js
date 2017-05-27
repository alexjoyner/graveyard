import React from 'react';
import {Link} from 'react-router';
require('./_.sass');


const NavBar = (props) => {
	return (
		<div>
			<div className="NavBar">
				<Link to={'/checkin'} activeClassName="active">Check In</Link>
				<Link to={'/checkout'} activeClassName="active">Check Out</Link>
			</div>
		</div>
	);
};

export {NavBar};
