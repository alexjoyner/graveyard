import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {postCheckIn} from './actions';
import {CheckInUI} from './CheckInUI';

function mapStateToProps({checkIn}) {
	return {
		checkIn
	};
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		postCheckIn
	}, dispatch);
}
export const CheckIn = connect(mapStateToProps, mapDispatchToProps)(CheckInUI);
