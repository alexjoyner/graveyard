import React, {Component} from 'react';
import HomeWrapper from '../../containers/Home/index';
import NavBar from '../../containers/NavBar';
require('./_app.sass');

export default class App extends Component {
	render() {
		return (
			<div>
				<div id="MainMetaTruthContainer">
					<NavBar />
					<HomeWrapper />
				</div>
			</div>
		);
	}
}
