import React, { Component } from 'react';

class FeedbackBox extends Component{
	constructor(props){
		super(props);
		this.state = {comment: ''}
	}
	handleChange = (event) => {
		this.setState({
			comment: event.target.value
		})
	};
	render() {
		return (
			<div>
				{this.state.comment}
				<textarea
					placeholder="Comments"
					value={this.state.comment}
					onChange={this.handleChange} />
				<button id="addComment" onClick={() => this.props.addComment(this.state.comment)}>
					Add Comment
				</button>
			</div>
		);
	}
}

export {FeedbackBox};
