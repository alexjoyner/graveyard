import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPostDetail} from '../../js/actions/index';
import MtTagCell from '../../components/tag-cell/index';
import PostActionBar from '../../components/post/post-detail-action-bar/index';
require('./_.sass');
require('./_post_header.sass');
//import {bindActionCreators} from 'redux';
class PostDetail extends Component {
	/*componentWillReceiveProps(nextProps) {
	 let params = nextProps.params;
	 this.getPosts(params);
	 }*/
	componentWillMount() {
		let params = this.props.params;
		this.getPosts(params);

	}

	getPosts(params) {
		/* Check first for  */
		this.props.fetchPostDetail(params.postId);
	}

	// constructor(props){
	//  super(props)
	//
	//  // this.state = {term: ''};
	//  // this.onInputChange = this.onInputChange.bind(this);
	//  // this.onFormSubmit = this.onFormSubmit.bind(this);
	//  }
	renderPostHeader(post) {
		return (
			<div>
				<div id="Question-Header">
					<MtTagCell tags={post.tags}/>
					<h2 id="Question-Header-Title"
						className="text-center">
						{post.title}
					</h2>
					<h5 id="Question-Header-Detail"
						className="text-center">
						{post.detail}
					</h5>
				</div>
				<PostActionBar post={post}/>
			</div>
		)
	}

	render() {
		if (!this.props.post) {
			return (<div></div>);
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
	return {post: state.posts.post};
}


// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({RENAME_TO_ACTION}, dispatch);
// }

export default connect(mapStateToProps, {fetchPostDetail})(PostDetail);