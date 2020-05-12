import React from 'react';
import {CheckInForm} from '../CheckInForm'
require('./_.sass');


const CheckInUI = ({props}) => {
	let {postNewClient} = props;
	return (
		/*Components only return one element*/
		<div>
			<CheckInForm {...props} onSubmit={postNewClient}/>
		</div>
	);
};

export {CheckInUI};
