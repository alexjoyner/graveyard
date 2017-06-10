import React from 'react';
require('./_.sass');


const <%= componentName %> = (props) => {
	return (
		<div className="<%= componentName %>">
			<h1>HELLO <%= componentName %></h1>
		</div>
	);
};

export {<%= componentName %>};
