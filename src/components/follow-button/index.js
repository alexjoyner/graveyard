import React from 'react';
require('./_.sass');
export default (props) => {
	return (
		<button className="mt-btn-default mt-btn">
			<span>Follow</span>
			<span>Unfollow</span>
		</button>
	);
}