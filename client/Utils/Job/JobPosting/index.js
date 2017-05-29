import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextArea} from '../../Form/TextArea';
import {Header} from '../../Form/Header';
import {Details} from '../Details';
import {BasicBtn} from '../../Buttons/BasicBtn';
require('./_.sass');


const Posting = (form) => {
	console.log(form);
	const {handleSubmit} = form;
	const {job} = form.props;
	return (
		<form onSubmit={handleSubmit}
		      className="FormContainer SearchResults">
			<Header HeaderText="Job Posting"/>
			<div className="FormBody">
				<Details {...job}/>
				<br/>
				<Field
					type="text"
					name="techSolution"
					component={TextArea}
					props={{
						placeholder: "Tech Solution"
					}}/>
				<BasicBtn text="Check Out"
				          type="submit"/>
			</div>
		</form>
	);
};

const JobPosting = reduxForm({
})(Posting);

export {JobPosting};
