import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {Home} from '../home/container';
import {About} from '../about/container';
const APP_ROUTES = (
	<Route path='/'>
		<IndexRoute component={Home} />
		<Route path='/about' component={About}/>
	</Route>
);

export default APP_ROUTES
