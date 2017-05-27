import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {checkOutClient, hideNotif} from './actions';
import {CheckOutUI} from './CheckOutUI';

function mapStateToProps({checkOut}) {
	return {
		showNotif: checkOut.showNotif
	};
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		checkOutClient, hideNotif //TODO: Abstract out hide notif
	}, dispatch);
}
export const CheckOut = connect(mapStateToProps, mapDispatchToProps)(CheckOutUI);
