import React from 'react';
import {CommentBox} from '../../statefull/CommentBox1';
require('./_.sass');


const DemoUI = ({props}) => {
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
			{/*<CommentBox props={props}/>*/}
			<button onClick={() => preOrderApp(preOrders)}>New PreOrder</button>
		</div>
	);
};

export {DemoUI};
