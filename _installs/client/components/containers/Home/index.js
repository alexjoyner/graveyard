import React, { Component } from 'react';
import { connect } from 'react-redux';
import {} from '../../../js/actions/index';
require('./_.sass');
class HomeContainer extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="row">
				<div className="col col-lg-3 hidden-lg-down">

				</div>
				<div className="col col-lg-6 col-xs-12">
					<h1>HELLO WORLD</h1>
				</div>
				<div className="col col-lg-3 hidden-lg-down">

				</div>
			</div>
		);
	}
}

function mapStateToProps() {
	return {};
}
export default connect(mapStateToProps, {})(HomeContainer);
