import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomeWrapper from '../components/containers/Home/index';
import App from '../components/main/app';

// IndexRoute:
// If the route is '/', show App and show PostsIndex
export default(
	//<Route path='/' component={App}></Route>
	<Route path='/' component={App}>
		<IndexRoute component={HomeWrapper} />
	</Route>
)
