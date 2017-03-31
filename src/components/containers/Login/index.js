import React, { Component } from 'react';
import { connect } from 'react-redux';
require('./_.sass');
//import {bindActionCreators} from 'redux';
class Login extends Component {
	// constructor(props){
	//  super(props)
	//
	//  // this.state = {term: ''};
	//  // this.onInputChange = this.onInputChange.bind(this);
	//  // this.onFormSubmit = this.onFormSubmit.bind(this);
	//  }
	render() {
		return (<div>LOGIN PAGE</div>);
	}
}

// function mapStateToProps(state) {
// 	return { posts: state.posts.all };
// }


// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({RENAME_TO_ACTION}, dispatch);
// }

export default connect(null, null)(Login);