import React from 'react';
import { Field, reduxForm } from 'redux-form';

const CheckInFormComponent = (props) => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="firstName">First Name</label>
				<br/>
				<Field name="firstName" component="input" type="text"/>
			</div>
			<div>
				<label htmlFor="lastName">Last Name</label>
				<br/>
				<Field name="lastName" component="input" type="text"/>
			</div>
			<div>
				<label htmlFor="description">Short Description</label>
				<br/>
				<Field name="description" component="textarea" type="text"/>
			</div>
			<button type="submit">Submit</button>
		</form>
	)
};

// Decorate the form component
const CheckInForm = reduxForm({
	form: 'contact' // a unique name for this form
})(CheckInFormComponent);

export {CheckInForm};
