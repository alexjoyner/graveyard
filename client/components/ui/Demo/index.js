/*
* Components are essentially little ui modules that are optimized for
* - efficiency
* - re-usability
* */

import React from 'react';
require('./_.sass');
export default ({props}) => {
	const {preOrderApp} = props;
	const {appName, preOrders} = props.config;
	return (
		/*Components only return one element*/
		<div>
			<h1>HELLO WORLD</h1>
			{/*Once we have mapStateToProps properly setup,
			 we can just call this.props.[our data path]*/}
			<h2>This is {appName}</h2>
			<h3>Pre-Orders: {preOrders}</h3>
			<button onClick={() => preOrderApp(preOrders)}>New PreOrder</button>
		</div>
	);
}
