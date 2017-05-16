import React from 'react';
import {CheckInForm} from '../CheckInForm';
require('./_.sass');


const CheckInUI = (props) => {
	let {postCheckIn} = props;
	return (
		<div>
			<h1>HELLO CheckInUI</h1>
			<CheckInForm {...props} onSubmit={postCheckIn}/>
		</div>
	);
};

export {CheckInUI};
