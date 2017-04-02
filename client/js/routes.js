/* Base imports for routes*/
import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* Import the _app-root app wrapper component
* 		this is the _app-root component that
* 		everything will root from through
* 		calling {this.props.children}
*/

/* Import _app-root container routes */
import {Demo} from '../components/containers/Home/index';

// IndexRoute:
// If the route is '/', show our home page
export default(
	<Route path='/'>
		{/*We need an index route that will be
		our home container at / */}
		<IndexRoute component={Demo} />
	</Route>
)
