import React from 'react';
require('./_.sass');


const BasicBtn = ({text, clickEvent}) => {
	return (
		<div>
			<button className="BasicBtn" onClick={clickEvent}>{text}</button>
		</div>
	);
};

export {BasicBtn};
