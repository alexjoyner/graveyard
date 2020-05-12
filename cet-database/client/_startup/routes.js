import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {CheckIn} from '../checkIn/container';

const APP_ROUTES = (
	<Route path='/'>
		<IndexRoute component={CheckIn} />
	</Route>
);

export default APP_ROUTES
