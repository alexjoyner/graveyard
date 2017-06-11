import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {} from './actions';
import {HomeUI} from './HomeUI';

function mapStateToProps(state) {
	return {};
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
	}, dispatch);
}
export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI);
