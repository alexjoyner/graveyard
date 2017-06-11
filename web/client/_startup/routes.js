import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {Home} from '../Home/container';

const APP_ROUTES = (
	<Route path='/'>
		<IndexRoute component={Home} />
	</Route>
);

export default APP_ROUTES
