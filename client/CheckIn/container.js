import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {postCheckIn} from './actions';
import {CheckInUI} from './CheckInUI';

function mapStateToProps(state) {
	return {};
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		postCheckIn
	}, dispatch);
}
export const CheckIn = connect(mapStateToProps, mapDispatchToProps)(CheckInUI);
