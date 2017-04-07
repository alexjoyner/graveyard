import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {Demo} from '../components/containers/Demo/index';



export default(
	<Route path='/'>
		<IndexRoute component={Demo} />
	</Route>
)
