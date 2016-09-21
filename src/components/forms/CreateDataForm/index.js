import React from 'react';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
require('./_.sass');
export default (props) => {
	let currentStep = 2;
	const closeModal = () => {
		props.close();
	};
	return (
		<div className="ro-modal">
			<button className="ModalClose"
					onClick={closeModal}>
				Close
			</button>
			<form
				id="CreateSupportForm"
				className="ro-modal-content">
				{renderStep(currentStep)}
			</form>
		</div>
	);
}
function renderStep(stepNum) {
	switch (stepNum) {
		case 1:
			return (<Step1 />);
		case 2:
			return (<Step2 />);
	}
}