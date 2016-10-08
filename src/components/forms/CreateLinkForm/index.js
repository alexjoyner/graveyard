import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {createNewLink} from '../../../js/actions/index';
require('./_.sass');
class CreateLinkForm extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}
	closeModal(){
		this.props.close();
	}
	postData(data){
		console.log(data);
		this.props.createNewLink(data)
			.then(action => {
				const post = action.payload.data;
				this.props.close();
				this.context.router.push('/post/' + post._id)
			});
	}
	renderStep(){
		return (
			<div id="MainFormStep">
				<div className="form-group">
					<label htmlFor="source">
						From ID
					</label>
					<Field
						name="from_post_id"
						type="number"
						component="input"
						id="source"
						className="form-control"
						required/>
				</div>
				<div className="form-group">
					<label htmlFor="source">
						To ID
					</label>
					<Field
						name="to_post_id"
						type="number"
						component="input"
						id="source"
						className="form-control"
						required/>
				</div>
				<button type="submit"
						className="mt-btn mt-btn-sm mt-btn-success">
					Submit
				</button>
			</div>
		)
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

CreateLinkForm = reduxForm({
	form: 'CreateLink'
})(CreateLinkForm);

export default connect(null, {createNewLink})(CreateLinkForm);
