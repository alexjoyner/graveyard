import React, { useContext, useState } from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';
import { StoreContext } from '../../../utils/AppBuilder/storeContext';
import Typography from '@material-ui/core/Typography';
import { FeaturesContext } from '../../../utils/AppBuilder/featuresContext';
import { Job } from '../../../features/Jobs/types/Jobs';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const Body = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [state] = useContext(StoreContext);
	const { Jobs: { JobsData, JobPost } } = useContext(FeaturesContext);
	const {
		Body: { contents }
	} = state;

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};
	return (
		<HeaderSideBarPageBody>
			<JobsData>
				{(Jobs: Job[]) => (
					<>
						{Jobs.slice(activeStep * 50, activeStep * 50 + 50).map((Job, i) => (
							<div key={Job.id}>
								<JobPost job={Job} />
							</div>
						))}
						<div>
							Page {activeStep} of {Math.ceil(Jobs.length / 50)}
						</div>
						<MobileStepper
							variant="progress"
							steps={Math.ceil(Jobs.length / 50)}
							position="static"
							activeStep={activeStep}
							nextButton={
								<Button size="small" onClick={handleNext} disabled={activeStep === 5}>
									Next
									<KeyboardArrowRight />
								</Button>
							}
							backButton={
								<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
									<KeyboardArrowLeft />
									Back
								</Button>
							}
						/>
					</>
				)}
			</JobsData>
		</HeaderSideBarPageBody>
	);
};

export { Body };
