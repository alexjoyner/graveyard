import React from 'react';
require('./_.sass');


const TextArea = (field) => {
	const {input, placeholder, type, rows, maxLength} = field;
	const options = {
		rows, maxLength, type, placeholder
	};
	return (
		<div>
			<textarea {...input} {...options}/>
		</div>
	);
};

export {TextArea};
