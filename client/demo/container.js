import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {preOrderApp, addComment} from './actions';
import {DemoUI} from './DemoUI';
/* Containers should not have styles
 * NO!!! require('_.sass)*/

class DemoContainer extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			/*Our return function MUST only return one element*/
			<DemoUI props={this.props}/>
		);
	}
}
function mapStateToProps(state) {
	return state.demoInfo;
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		preOrderApp, addComment
	}, dispatch);
}
export const Demo = connect(mapStateToProps, mapDispatchToProps)(DemoContainer);
