import React, {Component} from 'react';
import NavBar from '../containers/NavBar';
require('./_app.sass');

export default class App extends Component {
	render() {
		return (
			<div>
				<div id="MainMetaTruthContainer">
					<NavBar />
					{this.props.children}
				</div>
			</div>
		);
	}
}
