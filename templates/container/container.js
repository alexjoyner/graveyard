import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {} from './actions';
import {<%= upperContainerName %>UI} from './<%= containerName %>UI';

function mapStateToProps(state) {
	return {};
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
	}, dispatch);
}
export const <%= upperContainerName %> = connect(mapStateToProps, mapDispatchToProps)(<%= upperContainerName %>UI);
