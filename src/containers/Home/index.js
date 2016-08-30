import React, { Component } from 'react';
import { connect } from 'react-redux';
//import HomeContainerTpl from './template';
import QuickLinks from '../../components/panes/quick-links/index';
import {fetchGeneralFeedPosts, fetchTopicFeedPosts} from '../../js/actions/index';
import Post from '../../components/post/index';
require('./_.sass');
class HomeContainer extends Component {
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
		if (params.topic_name) {
			this.props.fetchTopicFeedPosts(params.topic_id);
			return;
		}
		if (params.feed_name) {
			this.props.fetchGeneralFeedPosts(params.feed_name);
			return;
		}
		this.props.fetchGeneralFeedPosts();
	}
	renderPosts(posts){
		return posts.map(post => {
			return (
				<div key={post._id}>
					<Post post={post} />
				</div>
			)
		})
	}
	render() {
		return (
			<div className="row">
				<div className="col col-lg-3 hidden-lg-down">
					<div className="">
						<QuickLinks/>
					</div>
				</div>
				<div className="col col-lg-6 col-xs-12">
					{this.renderPosts(this.props.posts)}
				</div>
				<div className="col col-lg-3 hidden-lg-down">

				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all };
}

// this construct gives us access to this.props.fetchPosts
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts}, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(PostsIndex);
//
// we can shortcut the above boilerplate with:
// export default connect(null, {fetchPosts: fetchPosts})(PostsIndex);
//
// and further simplifying with ES6 syntax:
//
export default connect(mapStateToProps, { fetchGeneralFeedPosts, fetchTopicFeedPosts })(HomeContainer);