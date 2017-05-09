import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {postNewClient} from './actions';
import {CheckInUI} from './CheckInUI';
/* Containers should not have styles
 * NO!!! require('_.sass)*/

class CheckInContainer extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			/*Our return function MUST only return one element*/
			<CheckInUI props={this.props}/>
		);
	}
}
function mapStateToProps(state) {
	return state.demoInfo;
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		postNewClient
	}, dispatch);
}
export const CheckIn = connect(mapStateToProps, mapDispatchToProps)(CheckInContainer);
