import React, { Component } from 'react';
import { connect } from 'react-redux';
//import HomeContainerTpl from './template';
import QuickLinks from '../../../components/panes/quick-links/index';
import {fetchGeneralFeedPosts, fetchTopicFeedPosts} from '../../../js/actions/index';
import Post from '../../../components/post/index';
require('./_.sass');
class HomeContainer extends Component {
	constructor(props){
		super(props);

		this.state = {headerText: ''};
	}
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
			this.setState({headerText: 'Top posts in ' + params.topic_name})
			return;
		}
		if (params.feed_name === 'top') {
			this.setState({headerText: 'All time top posts'});
			this.props.fetchGeneralFeedPosts(params.feed_name);
			return;
		}
		this.setState({headerText: 'Hot questions on MetaTruth right now'});
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
			<div id="Home-Container" className="row">
				<div className="col col-lg-3 hidden-lg-down">
					<QuickLinks/>
				</div>
				<div className="col col-lg-6 col-xs-12">
					<h5 id="Home-MainHeader">
						{this.state.headerText}
					</h5>
					<hr/>
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