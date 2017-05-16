import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {} from './actions';
import {CheckOutUI} from './CheckOutUI';

function mapStateToProps(state) {
	return {};
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
	}, dispatch);
}
export const CheckOut = connect(mapStateToProps, mapDispatchToProps)(CheckOutUI);
