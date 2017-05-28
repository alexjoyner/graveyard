import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Header} from '../../Utils/Form/Header';
import {Input} from '../../Utils/Form/Input';
import {TextArea} from '../../Utils/Form/TextArea';
import {BasicBtn} from '../../Utils/Buttons/BasicBtn';
require('../../Utils/Form/Container/_.sass');
require('../../Utils/Form/Body/_.sass');
require('./_.sass');
const CheckOutFormComponent = (props) => {
	const {handleSubmit} = props;
	return (
		<form id="CheckOutForm"
		      className="FormContainer"
		      onSubmit={handleSubmit}>
			<Header HeaderText="Check Out"/>
			<div className="FormBody">
				<Field name="clientName"
				       component={Input}
				       type="text"
				       props={{
					       placeholder: 'Search by client name'
				       }}/>
				<BasicBtn type="submit" text="Submit"/>
			</div>
		</form>
	)
};

// Decorate the form component
const CheckOutForm = reduxForm({
	form: 'checkoutclient' // a unique name for this form
})(CheckOutFormComponent);

export {CheckOutForm};
