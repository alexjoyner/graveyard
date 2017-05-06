import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {preOrderApp, addComment} from './actions';
import {HomeUI} from './HomeUI';
/* Containers should not have styles
 * NO!!! require('_.sass)*/
function mapStateToProps(state) {
	return state.demoInfo;
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		preOrderApp, addComment
	}, dispatch);
}
export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI);
