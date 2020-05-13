import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {searchPosts} from '../../../js/actions/index';
require('./_.sass');
class CreatePointForm extends Component {
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
	searchPosts(value) {
		this.props.searchPosts(value);
		return value
	}

	renderStep(){
		return (
			<div id="MainFormStep">
				<div className="form-group">
					<label htmlFor="source">
						Search questions
					</label>
					<Field
						name="from_post_id"
						type="text"
						component="input"
						id="source"
						className="form-control"
						normalize={this.searchPosts.bind(this)}
						autoFocus="true"
						required/>
				</div>
				<ul className="list-group">
					{this.props.searchResults.map((post) => <li key={post._id} className="list-group-item"> <div dangerouslySetInnerHTML={{__html: post.highlight.title[0]}}></div> </li>)}
				</ul>
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

CreatePointForm = reduxForm({
	form: 'CreateLink'
})(CreatePointForm);

function mapStateToProps(state) {
	return { searchResults: state.posts.searchResults };
}

export default connect(mapStateToProps, {searchPosts})(CreatePointForm);
