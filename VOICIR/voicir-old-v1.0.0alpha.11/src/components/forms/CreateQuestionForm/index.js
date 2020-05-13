import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {createNewPost} from '../../../js/actions';
import validate from './validation/validate';
import {get_question_type} from '../../../../utils';
import SliderStep from './steps/step2_slider_selector';
require('./_.sass');
const renderField = ({input, label, type, meta: {asyncValidating, touched, error}}) => (
	<div>
		<h4 id="AlertMessage"
			className="text-center">
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
class CreateQuestionForm extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			originalQuestion: '',
			sliderIndex: 0
		}
	}

	postQuestion(data) {
		if (get_question_type(data.title).type === 3 && this.state.sliderIndex === 0) {
			this.setState({
					step: 2,
					originalQuestion: data.title
				}
			);
			return;
		}
		data.yn_index = this.state.sliderIndex;
		this.props.createNewPost(data)
			.then(action => {
				const post = action.payload.data;
				this.props.close();
				this.context.router.push('/post/' + post._id)
			});
	};
	renderForm() {
		switch (this.state.step) {
			case 1:
				return (
					<Field
						name="title"
						component={renderField}
						type="text"/>);
			case 2:
				return (
					<SliderStep
						originalQuestion={this.state.originalQuestion}
						previous={() => this.setState({step: 1})}
						setSliderIndex={(indx)=>this.setState({sliderIndex: indx})}/>
				);
		}
	}

	render() {
		return (
			<form className="ro-modal"
				  onSubmit={this.props.handleSubmit(this.postQuestion.bind(this))}>
				<button type="button"
						className="ModalClose"
						onClick={this.props.close}>
					Close
				</button>
				{this.renderForm()}
			</form>
		)
	};
}
;

CreateQuestionForm = reduxForm({
	form: 'CreateQuestion',
	validate
})(CreateQuestionForm);

export default connect(null, {createNewPost})(CreateQuestionForm);
