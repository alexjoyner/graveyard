import React, {Component} from 'react';
import MarkDown from 'react-remarkable';
import {get_edited_question} from '../../../../../utils';
import {get_base_statement} from '../../../../../utils';
require('./_.sass');
class SliderStep extends Component {
	constructor(props) {
		super(props);
		let base_statement = get_base_statement(props.originalQuestion);
		this.state = {
			originalQuestion: props.originalQuestion,
			base_statement: base_statement,
			editedQuestion:  get_edited_question(props.originalQuestion, base_statement),
			slider_value: 1,
			slider_max: base_statement.split(' ').length
		}
	}

	onSliderChange = (event) => {
		let index = event.target.value;
		let newThing = get_edited_question(this.state.originalQuestion, this.state.base_statement, index);
		/* setSliderIndex is a callback function on the props of the component*/
		this.props.setSliderIndex(index);
		this.setState({
				slider_value: index,
				editedQuestion: newThing
			}
		)
	};
	render() {
		return (
			<div id="step2_slider"
				 className="ro-modal-content">
				<h3>1 More step: Move the slider until the statement makes sense</h3>
				<h2>Yes/No because: <MarkDown source={this.state.editedQuestion}/></h2>
				<h4>EX: Are dogs awesome? MAKES dogs are/aren't awesome</h4>
				<br/>
				<input
					name="slider_yn_index"
					type="range"
					min="2"
					max={this.state.slider_max}
					step="1"
					value={this.state.slider_value}
					onChange={this.onSliderChange.bind(this)}/>
				<br/>
				<button type="Submit" className="mt-btn mt-btn-success">
					Finished
				</button>
				<button className="mt-btn mt-btn-danger" onClick={this.props.previous}>
					Go Back
				</button>
			</div>
		)
	}
}
export default SliderStep;
