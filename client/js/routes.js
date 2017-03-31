/* Base imports for routes*/
import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* Import the main app wrapper component
* 		this is the main component that
* 		everything will root from through
* 		calling {this.props.children}
*/
import App from '../components/main/app';

/* Import main container routes */
import HomeWrapper from '../components/containers/Home/index';

// IndexRoute:
// If the route is '/', show App and show PostsIndex
export default(
	//<Route path='/' component={App}></Route>
	<Route path='/' component={App}>
		{/*We need an index route that will be
		our home container at / */}
		<IndexRoute component={HomeWrapper} />
	</Route>
)
