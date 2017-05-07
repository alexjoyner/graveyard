import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import {preOrderApp, addComment} from './actions';
import {AboutUI} from './AboutUI';
/* Containers should not have styles
 * NO!!! require('_.sass)*/
function mapDispatchToProps() {
	return {};
}
function mapStateToProps(state) {
	return state.demoInfo;
}
export const About = connect(mapStateToProps, mapDispatchToProps)(AboutUI);
