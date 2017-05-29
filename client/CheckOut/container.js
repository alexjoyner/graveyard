import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {showNotif, hideNotif} from '../shared/notifications/actions';
import {checkOutClient, searchUnfinished, removeJob} from './actions';
import {CheckOutUI} from './CheckOutUI';

function mapStateToProps({Notifs, CheckOut}) {
	return {
		Notifs,
		jobs: CheckOut.jobs
	};
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		checkOutClient, hideNotif, showNotif, searchUnfinished, removeJob
	}, dispatch);
}
export const CheckOut = connect(mapStateToProps, mapDispatchToProps)(CheckOutUI);
