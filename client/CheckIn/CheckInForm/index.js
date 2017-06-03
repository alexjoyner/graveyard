import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Header} from '../../Utils/Form/Header';
import {Input} from '../../Utils/Form/Input';
import {TextArea} from '../../Utils/Form/TextArea';
require('../../Utils/Buttons/BasicBtn/_.sass');
require('../../Utils/Form/Container/_.sass');
require('../../Utils/Form/Body/_.sass');
require('./_.sass');
class CheckInFormComponent extends Component {
	constructor(props) {
		super(props);
	}

	submitData(data) {
		this.props.onSubmit(data);
		this.props.reset();
	}

	render() {
		const {handleSubmit} = this.props;
		return (
			<form id="CheckInForm"
			      className="FormContainer"
			      onSubmit={handleSubmit(this.submitData.bind(this))}>
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
					<button type="submit"
					        className="BasicBtn">Submit
					</button>
				</div>
			</form>
		)
	}
}
;

// Decorate the form component
const CheckInForm = reduxForm({
	form: 'checkinclient' // a unique name for this form
})(CheckInFormComponent);

export {CheckInForm};
