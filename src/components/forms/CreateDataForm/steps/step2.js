import React from 'react';

export default (props) => {
	return (
		<div id="Step2">
	<textarea className="form-control"
			  rows="3"
			  style={{resize: 'none'}}
			  minLength="20"
			  maxLength="150"
			  placeholder="State what your evidence shows. Max 150 Characters"
			  required>
            </textarea>
			<br/>
			<div className="form-group">
				<label htmlFor="source">
					Source (Only 1)
				</label>
				<input type="text"
					   id="source"
					   className="form-control"
					   placeholder="http://"
					   pattern="https?://.+"
					   title="Include http://"
					   required/>
			</div>
			<textarea
				className="form-control"
				rows="5"
				style={{resize: 'none'}}
				maxLength="600"
				placeholder="Please describe the thought process behind your opinion. Max 600 Characters">
            </textarea>
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
				<button className="mt-btn mt-btn-sm mt-btn-danger">
					Cancel
				</button>
			</div>
		</div>
	)
}