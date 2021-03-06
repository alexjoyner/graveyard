import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPostDetail} from '../../../js/actions/index';
import MtTagCell from '../../../components/tag-cell/index';
import Post from '../../../components/post/index';
import PostActionBar from '../../../components/post-detail-action-bar/index';
import CreatePointForm from '../../forms/CreatePointForm';
require('./_.sass');
require('./_post_header.sass');
//import {bindActionCreators} from 'redux';
class PostDetail extends Component {
	componentWillReceiveProps(nextProps) {
		let routeChanged = nextProps.location !== this.props.location
		if (routeChanged) {
			let params = nextProps.params;
			this.getPosts(params);
		}
	}

	componentDidMount() {
		let params = this.props.params;
		this.getPosts(params);

	}

	getPosts(params) {
		/* Check first for  */
		this.props.fetchPostDetail(params.postId);
	}

	constructor(props) {
		super(props);
		this.state = {
			showAddPointModal: false
		};
	}
	closeModal(){
		this.setState({
			showAddPointModal: false
		});
	}
	openModal(name){
		switch(name){
			case 'for_a_should':
				this.setState({showAddPointModal: true});
				break;
		}
	}
	renderPostList(posts) {
		return (
			<div className="container">
				{posts.map(post => {
					return <Post post={post}
								 key={'yesPost_' + post._id}/>
				})}
			</div>
		)
	}

	renderPostHeader(post) {
		return (
			<div>
				{(this.state.showAddPointModal)? <CreatePointForm close={this.closeModal.bind(this)}/> : null}
				<div id="Question-Header">
					<MtTagCell tags={post.tags}/>
					<h2 id="Question-Header-Title"
						className="text-center">
						{post._id + ' ' + post.title}
					</h2>
					<h5 id="Question-Header-Detail"
						className="text-center">
						{post.detail}
					</h5>
				</div>
				<PostActionBar post={post} showAddPointModal={this.openModal.bind(this, 'for_a_should')}/>
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
					{this.renderPostList(this.props.post.points)}
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