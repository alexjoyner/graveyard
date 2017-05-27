import React from 'react';
require('./_.sass');


const Input = ({input, placeholder, type}) => {
	return (
		<div>
			<input {...input} placeholder={placeholder} type={type}/>
		</div>
	);
};

export {Input};
