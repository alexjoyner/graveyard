import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {<% upperHomeContainerName %>} from '../<% homeContainerName %>/container';

const APP_ROUTES = (
	<Route path='/'>
		<IndexRoute component={<% upperHomeContainerName %>} />
	</Route>
);

export default APP_ROUTES
