import React from 'react';
require('./_.sass');


const Header = (props) => {
	const {HeaderText} = props;
	return (
		<div>
			<div className="Header">
				<p>{HeaderText}</p>
			</div>
		</div>
	);
};

export {Header};
