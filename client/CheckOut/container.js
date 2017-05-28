import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {showNotif, hideNotif} from '../shared/notifications/actions';
import {checkOutClient} from './actions';
import {CheckOutUI} from './CheckOutUI';

function mapStateToProps({Notifs}) {
	return {
		Notifs
	};
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		checkOutClient, hideNotif, showNotif
	}, dispatch);
}
export const CheckOut = connect(mapStateToProps, mapDispatchToProps)(CheckOutUI);
