import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {postCheckIn, hideNotif} from './actions';
import {CheckInUI} from './CheckInUI';

function mapStateToProps({checkIn}) {
	return {
		showNotif: checkIn.showNotif
	};
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		postCheckIn, hideNotif
	}, dispatch);
}
export const CheckIn = connect(mapStateToProps, mapDispatchToProps)(CheckInUI);
