import React from 'react';
import {Link} from 'react-router';
require('./_.sass');

const NavBar = ({props}) => {
	return (
		<nav id="NavBar">
			<Link className="nav-item">HOME</Link>
			<Link className="nav-item">ABOUT</Link>
			<Link className="nav-item">WORKOUT PROGRAMS</Link>
			<Link className="nav-item">APPAREL</Link>
			<Link className="nav-item">FAQ</Link>
			<Link className="nav-item">SOCIAL</Link>
			<Link className="nav-item">CONTACT</Link>
		</nav>
	)
};

export {NavBar};
