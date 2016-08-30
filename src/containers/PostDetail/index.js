import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPostDetail} from '../../js/actions/index';
require('./_.sass');
//import {bindActionCreators} from 'redux';
class PostDetail extends Component {
	componentWillReceiveProps(nextProps) {
		let params = nextProps.params;
		this.getPosts(params);
	}
	componentWillMount() {
		let params = this.props.params;
		this.getPosts(params);

	}
	getPosts(params){
		/* Check first for  */
		return this.props.fetchPostDetail(params.postId);
	}
	// constructor(props){
	//  super(props)
	//
	//  // this.state = {term: ''};
	//  // this.onInputChange = this.onInputChange.bind(this);
	//  // this.onFormSubmit = this.onFormSubmit.bind(this);
	//  }
	renderPostHeader(post){
		return (
			<div>{post.title}</div>
		)
	}
	render() {
		if(!this.props.post){
			return(<div></div>);
		}
		return (
			<div id="QuestionContainer"
				 className="row">
				<div className="col col-md-2">
				</div>
				<div className="col col-md-8">
					{this.renderPostHeader(this.props.post)}
				</div>
				<div className="col col-md-2"></div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { post: state.posts.post };
}


// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({RENAME_TO_ACTION}, dispatch);
// }

export default connect(mapStateToProps, { fetchPostDetail })(PostDetail);