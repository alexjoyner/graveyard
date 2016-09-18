import React from 'react';
require('./_.sass');
export default (props) => {
	return (
		<div className="ro-modal">
			<button className="ModalClose" onClick={props.closeModal()}>
				Close
			</button>
			<div className="ro-modal-content">
				<input type="text"
					   id="QuestionInput"
					   placeholder="Enter A debatable question"
					   autoComplete="off"
					   autoFocus="true"/>
			</div>
		</div>
	);
}