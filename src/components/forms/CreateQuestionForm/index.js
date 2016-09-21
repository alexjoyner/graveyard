import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {postNewQuestion} from '../../../js/actions';
import validate from './validation/validate';
require('./_.sass');
//import {bindActionCreators} from 'redux';
import {Field, reduxForm} from 'redux-form';
const renderField = ({ input, label, type,  meta: { asyncValidating, touched, error } }) => (
	<div>
		<h4 id="AlertMessage" className="text-center">
			{error}
		</h4>
		<label>{label}</label>
		<div className={asyncValidating ? 'async-validating' : ''}>
			<input {...input}
				   type={type}
				   id="QuestionInput"
				   placeholder="Enter A debatable question"
				   autoComplete="off"
				   autoFocus="true"/>
		</div>
	</div>
);
let CreateQuestionForm = (props) => {
	const {handleSubmit} = props;
	const postQuestion = (data) => {
		props.postNewQuestion(data)
			.then(action => {
				const post = action.payload.data;
				props.close();
				props.router.push('/post/' + post._id)
			});
	};
	return (
		<form className="ro-modal"
			  onSubmit={handleSubmit(postQuestion)}>
			<button type="button" className="ModalClose" onClick={props.close}>
				Close
			</button>
			<Field
				name="title"
				component={renderField}
				type="text"/>
		</form>
	);
};

CreateQuestionForm = reduxForm({
	form: 'CreateQuestion',
	validate
})(CreateQuestionForm);

export default connect(null, {postNewQuestion})(CreateQuestionForm);