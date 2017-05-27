import React from 'react';
require('./_.sass');


const Notification = (props) => {
	return (
		<div>
			<div className="Notification">
				<i className="statusIcon">Status</i>
				<h1 className="statusHeader">Status Header</h1>
				<div className="message">Message</div>
			</div>
		</div>
	);
};

export {Notification};
