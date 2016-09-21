import React from 'react';
require('./_.sass');
export default (props) => {
	return (
		<li id="MainSearchBar"
			className="mt-navbar-form nav-item form-inline pull-left"
			role="search">
			<div className="mt-form-group dropdown">
				<input type="text"
					   className="mt-form-control"
					   placeholder="Ask or Search MetaTruth" />
			</div>
		</li>
	);
}