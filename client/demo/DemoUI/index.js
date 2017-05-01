import React from 'react';
import {FeedbackBox} from '../FeedbackBox';
import {commentList} from '../../utils/commentList';
require('./_.sass');


const DemoUI = ({props}) => {
	const {appName, preOrders, preOrderApp} = props;
	return (
		/*Components only return one element*/
		<div>
			<h1>HELLO WORLD</h1>
			{/*Once we have mapStateToProps properly setup,
			 we can just call this.props.[our data path]*/}
			<h2>This is {appName}</h2>
			<h3>Pre-Orders: {preOrders}</h3>
			Comments
			<commentList {...props} />
			<br/>
			<FeedbackBox {...props}/>
			<button id="preOrderButton" onClick={() => preOrderApp()}>New PreOrder</button>
		</div>
	);
};

export {DemoUI};
