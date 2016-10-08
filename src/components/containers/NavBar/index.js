import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import MainSearchBar from '../../forms/MainSearchBar/index';
import CreateQuestionForm from '../../forms/CreateQuestionForm';
import CreateDataForm from '../../forms/CreateDataForm';
import CreateLinkForm from '../../forms/CreateLinkForm';
require('./_.sass');
class NavBar extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	constructor(props) {
		super(props);

		this.state = {
			showCreateQuestionModal: false,
			showCreateDateModal: false,
			showCreateLinkModal: false
		};
		// this.onInputChange = this.onInputChange.bind(this);
		// this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	routeHome() {
		this.context.router.push('/')
	}
	closeModal(){
		this.setState({
			showCreateQuestionModal: false,
			showCreateDateModal: false,
			showCreateLinkModal: false
		});
	}
	openModal(name){
		switch(name){
			case 'question':
				this.setState({showCreateQuestionModal: true});
				break;
			case 'data':
				this.setState({showCreateDateModal: true});
				break;
			case 'link':
				this.setState({showCreateLinkModal: true});
				break;
		}
	}
	render() {
		return (
			<div>
				{(this.state.showCreateQuestionModal)? <CreateQuestionForm router={this.context.router} close={this.closeModal.bind(this)}/> : null}
				{(this.state.showCreateDateModal)? <CreateDataForm close={this.closeModal.bind(this)}/> : null}
				{(this.state.showCreateLinkModal)? <CreateLinkForm close={this.closeModal.bind(this)}/> : null}
				<ul id="MainNavBar">
					<li className="nav-item nav-item-left hidden-lg-down"
						onClick={this.routeHome.bind(this)}>
						<span>{this.props.config.appName + ' ' + this.props.config.version}</span>
					</li>
					{/*<MainSearchBar />*/}
					<li className="mt-navbar-form form-inline pull-left"
						role="search">
						<button type="submit"
								className="mt-nav-btn mt-btn-default"
								onClick={this.openModal.bind(this, 'question')}>Ask a question
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
								className="mt-nav-btn mt-btn-default"
								onClick={this.openModal.bind(this, 'data')}>Add Data
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
								className="mt-nav-btn mt-btn-default"
								onClick={this.openModal.bind(this, 'link')}>Add A Link
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
