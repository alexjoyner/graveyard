import React from 'react';
require('./_.sass');


const BasicBtn = ({text}) => {
	return (
		<div>
			<button className="BasicBtn">{text}</button>
		</div>
	);
};

export {BasicBtn};
