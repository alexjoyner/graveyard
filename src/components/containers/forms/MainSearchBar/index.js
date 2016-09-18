import React, { Component } from 'react';
import { connect } from 'react-redux';
require('./_.sass');
//import {bindActionCreators} from 'redux';
class RENAME_THIS_TO_CONTAINER_NAME extends Component {
	// constructor(props){
	//  super(props)
	//
	//  // this.state = {term: ''};
	//  // this.onInputChange = this.onInputChange.bind(this);
	//  // this.onFormSubmit = this.onFormSubmit.bind(this);
	//  }
	render() {
		return (
			<li id="MainSearchBar"
				className="mt-navbar-form nav-item form-inline pull-left"
				role="search">
				<div className="mt-form-group dropdown">
					<input type="text"
						   className="mt-form-control"
						   placeholder="Ask or Search MetaTruth" />
				</div>
			</li>
		);
	}
}

// function mapStateToProps({ weather }){
// 	return { weather };
// }


// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({RENAME_TO_ACTION}, dispatch);
// }

export default connect(null, null)(RENAME_THIS_TO_CONTAINER_NAME);