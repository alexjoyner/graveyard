import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Header} from '../../Utils/Form/Header';
import {Input} from '../../Utils/Form/Input';
import {TextArea} from '../../Utils/Form/TextArea';
import _ from 'lodash';
require('../../Utils/Form/Container/_.sass');
require('../../Utils/Form/Body/_.sass');
require('./_.sass');
const CheckOutFormComponent = (props) => {
	const {searchUnfinished} = props;
	const searchThrottled = _.debounce((term) => {
		searchUnfinished(term);
	}, 300);
	return (
		<form id="CheckOutForm"
		      className="FormContainer">
			<Header HeaderText="Search Active Jobs"/>
			<div className="FormBody">
				<Field name="term"
				       onChange={searchThrottled}
				       component={Input}
				       type="text"
				       props={{
					       placeholder: 'Search Jobs'
				       }}/>
			</div>
		</form>
	)
};

// Decorate the form component
const CheckOutForm = reduxForm({
	form: 'checkoutclient' // a unique name for this form
})(CheckOutFormComponent);

export {CheckOutForm};
