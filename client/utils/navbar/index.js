import React from 'react';
require('./_.sass');

const NavBar = ({props}) => {
	return (
		<ul id="NavBar">
			<li>HOME</li>
			<li>ABOUT</li>
			<li>WORKOUT PROGRAMS</li>
			<li>APPAREL</li>
			<li>FAQ</li>
			<li>SOCIAL</li>
			<li>CONTACT</li>
		</ul>
	)
};

export {NavBar};
