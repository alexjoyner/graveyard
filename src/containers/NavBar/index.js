import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//import {bindActionCreators} from 'redux';
require('./_.sass');
class NavBar extends Component {
	static contextTypes = {
		router: PropTypes.object
	};
	constructor(props){
	 super(props)

	 // this.state = {term: ''};
	 // this.onInputChange = this.onInputChange.bind(this);
	 // this.onFormSubmit = this.onFormSubmit.bind(this);
	 }
	routeHome(){
		this.context.router.push('/')
	}
	render() {
		return (
			<ul id="MainNavBar">
				<li className="nav-item nav-item-left hidden-lg-down"
					onClick={this.routeHome.bind(this)}>
					<span>Brand</span>
				</li>
			</ul>
		);
	}
}

// function mapStateToProps({ weather }){
// 	return { weather };
// }


// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({RENAME_TO_ACTION}, dispatch);
// }

export default connect(null, null)(NavBar);