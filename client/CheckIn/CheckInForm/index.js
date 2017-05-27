import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Header} from '../../Utils/Form/Header';
import {Input} from '../../Utils/Form/Input';
import {TextArea} from '../../Utils/Form/TextArea';
import {BasicBtn} from '../../Utils/Buttons/BasicBtn';
require('../../Utils/Form/Container/_.sass');
require('../../Utils/Form/Body/_.sass');
require('./_.sass');
const CheckInFormComponent = (props) => {
	const {handleSubmit} = props;
	return (
		<form id="CheckInForm"
		      className="FormContainer"
		      onSubmit={handleSubmit}>
			<Header HeaderText="Check In"/>
			<div className="FormBody">
				<Field name="clientName"
				       component={Input}
				       type="text"
				       props={{
				       	placeholder: 'Clients full name?'
				       }}/>
				<Field name="problemDesc"
				       component={TextArea}
				       type="textarea"
				       props={{
					       placeholder: 'Describe the problem?',
					       rows: 5,
					       maxLength: 140
				       }}/>
				<BasicBtn type="submit" text="Submit"/>
			</div>
		</form>
	)
};

// Decorate the form component
const CheckInForm = reduxForm({
	form: 'contact' // a unique name for this form
})(CheckInFormComponent);

export {CheckInForm};
