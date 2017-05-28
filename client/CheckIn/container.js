import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {showNotif, hideNotif} from '../shared/notifications/actions';
import {postCheckIn} from './actions';
import {CheckInUI} from './CheckInUI';

function mapStateToProps({Notifs}) {
	return {
		Notifs
	};
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		postCheckIn, hideNotif, showNotif
	}, dispatch);
}
export const CheckIn = connect(mapStateToProps, mapDispatchToProps)(CheckInUI);
