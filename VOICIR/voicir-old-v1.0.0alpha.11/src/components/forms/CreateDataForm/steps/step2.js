import React from 'react';
import {Field} from 'redux-form';
export default (props) => {
	return (
		<div id="Step2">
			<Field
				name="title"
				component="textarea"
				className="form-control"
				rows="3"
				style={{resize: 'none'}}
				minLength="20"
				maxLength="150"
				placeholder="State what your evidence shows. Max 150 Characters"
				required/>
			<br/>
			<div className="form-group">
				<label htmlFor="source">
					Source (Only 1)
				</label>
				<Field
					name="source"
					type="text"
					component="input"
					id="source"
					className="form-control"
					placeholder="http://"
					pattern="https?://.+"
					title="Include http://"
					required/>
			</div>
			<Field
				name="detail"
				component="textarea"
				className="form-control"
				rows="5"
				style={{resize: 'none'}}
				maxLength="600"
				placeholder="Please describe the thought process behind your opinion. Max 600 Characters"/>
			<br/>
			<div id="Step3">
				<button type="submit"
						className="mt-btn mt-btn-sm mt-btn-success">
					Add as Proof
				</button>
				<button type="submit"
						className="mt-btn mt-btn-sm mt-btn-danger">
					Add as Disproof
				</button>
				<button className="mt-btn mt-btn-sm mt-btn-danger"
						onClick={props.previous}>
					Cancel
				</button>
			</div>
		</div>
	)
}
