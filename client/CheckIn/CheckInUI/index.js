import React from 'react';
import {CheckInForm} from '../CheckInForm';
require('./_.sass');


const CheckInUI = (props) => {
	let {postCheckIn} = props;
	return (
		<div>
			<CheckInForm {...props} onSubmit={postCheckIn}/>
		</div>
	);
};

export {CheckInUI};
