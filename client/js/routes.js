import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {Demo} from '../components/containers/Demo/index';

const APP_ROUTES = (
	<Route path='/'>
		<IndexRoute component={Demo} />
	</Route>
);

export default APP_ROUTES
