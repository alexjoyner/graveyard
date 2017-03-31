import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomeWrapper from '../components/containers/Home/index';
import PostDetail from '../components/containers/PostDetail/index';
import Login from '../components/containers/Login';
import App from '../components/main/app';

// IndexRoute:
// If the route is '/', show App and show PostsIndex
export default(
	//<Route path='/' component={App}></Route>
	<Route path='/' component={App}>
		<IndexRoute component={HomeWrapper} />
		<Route path='login' component={Login} />
		<Route path='feed/:feed_name' component={HomeWrapper} />
		<Route path='topicfeed/topicname/:topic_name/topicid/:topic_id' component={HomeWrapper} />
		<Route path='post/:postId' component={PostDetail} />
	</Route>
)