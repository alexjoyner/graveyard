import React, {Component} from 'react';
require('./_app.sass');

export default class App extends Component {
	render() {
		return (
			<div>
				{this.props.children}
				Hello World
			</div>
		);
	}
}
