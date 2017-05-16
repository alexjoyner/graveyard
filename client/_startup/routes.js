import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {CheckIn} from '../CheckIn/container';
import {CheckOut} from '../CheckOut/container';

const APP_ROUTES = (
	<Route path='/'>
		<IndexRoute component={CheckIn} />
		<Route path='checkout' component={CheckOut}/>
	</Route>
);

export default APP_ROUTES
