import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {} from './actions';
import {DemoUI} from './DemoUI';

function mapStateToProps(state) {
	return {};
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
	}, dispatch);
}
export const Demo = connect(mapStateToProps, mapDispatchToProps)(DemoUI);
