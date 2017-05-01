import React, { Component } from 'react';

class FeedbackBox extends Component{
	constructor(props){
		super(props);
		this.state = {comment: ''}
	}
	handleChange = (event) => {
		console.log('Taco');
		this.setState({
			comment: event.target.value
		})
	};
	render() {
		return (
			<div>
				<textarea
					value={this.state.comment}
					onChange={this.handleChange} />
			</div>
		);
	}
}

export {FeedbackBox};
