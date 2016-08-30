import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomeWrapper from '../containers/Home/index';
import PostDetail from '../containers/PostDetail/index';

import App from '../components/main/app';

// IndexRoute:
// If the route is '/', show App and show PostsIndex
export default(
	//<Route path='/' component={App}></Route>
	<Route path='/' component={App}>
		<IndexRoute component={HomeWrapper} />
		<Route path='feed/:feed_name' component={HomeWrapper} />
		<Route path='topicfeed/topicname/:topic_name/topicid/:topic_id' component={HomeWrapper} />
		<Route path='post/:postId' component={PostDetail} />
	</Route>
)