import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import validate from './validation/validate';
import {reduxForm} from 'redux-form';
import {createNewPost} from '../../../js/actions/index';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
require('./_.sass');
class CreateDataForm extends Component {
	static contextTypes = {
		router: PropTypes.object
	};
	constructor(props){
		super(props);
		this.state = {
			step: 1
		}
	}
	closeModal(){
		this.props.close();
	}
	renderStep() {
		switch (this.state.step) {
			case 1:
				return (<Step1 next={() => this.setState({step: 2})}/>);
			case 2:
				return (<Step2 previous={() => this.setState({step: 1})}/>);
		}
	}
	postData(data){
		this.props.createNewPost(data)
			.then(action => {
				const post = action.payload.data;
				this.props.close();
				this.context.router.push('/post/' + post._id)
			});
	}
	render() {
		return (
			<div className="ro-modal">
				<button className="ModalClose"
						onClick={this.closeModal.bind(this)}>
					Close
				</button>
				<form
					id="CreateSupportForm"
					className="ro-modal-content"
					onSubmit={this.props.handleSubmit(this.postData.bind(this))}>
					{this.renderStep()}
				</form>
			</div>
		)
	};
}

CreateDataForm = reduxForm({
	form: 'CreateData',
	validate
})(CreateDataForm);

export default connect(null, {createNewPost})(CreateDataForm);
