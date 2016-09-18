import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import MainSearchBar from '../forms/MainSearchBar/index';
import CreateQuestionForm from '../forms/CreateQuestionForm';
//import {bindActionCreators} from 'redux';
require('./_.sass');
class NavBar extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	constructor(props) {
		super(props);

		this.state = {showModal: true};
		// this.onInputChange = this.onInputChange.bind(this);
		// this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	routeHome() {
		this.context.router.push('/')
	}
	render() {
		return (
			<div>
				{(this.state.showModal)? <CreateQuestionForm closeModal={()=>{this.setState({showModal: false})}}/> : null}
				<ul id="MainNavBar">
					<li className="nav-item nav-item-left hidden-lg-down"
						onClick={this.routeHome.bind(this)}>
						<span>{this.props.config.appName + ' ' + this.props.config.version}</span>
					</li>
					{/*<MainSearchBar />*/}
					<li className="mt-navbar-form form-inline pull-left"
						role="search">
						<button type="submit"
								className="mt-nav-btn mt-btn-default">Ask a question
						</button>
					</li>
					<li className="mt-navbar-form form-inline pull-left"
						role="search">
						<div className="mt-nav-btn mt-btn-default">OR
						</div>
					</li>
					<li className="mt-navbar-form form-inline pull-left"
						role="search">
						<button type="submit"
								className="mt-nav-btn mt-btn-default">Add Data
						</button>
					</li>
				</ul>
			</div>
		);
	}
}

function mapStateToProps({config}) {
	return {config};
}


// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({RENAME_TO_ACTION}, dispatch);
// }

export default connect(mapStateToProps, null)(NavBar);