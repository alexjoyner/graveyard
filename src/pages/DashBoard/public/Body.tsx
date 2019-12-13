import React, { useContext } from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';
import { StoreContext } from '../../../utils/AppBuilder/storeContext';
import Typography from '@material-ui/core/Typography';
import { FeaturesContext } from '../../../utils/AppBuilder/featuresContext';
import { Job } from '../../../features/Jobs/types/Jobs';

const Body = () => {
	const [state] = useContext(StoreContext);
	const { Jobs: { JobsData, JobPost } } = useContext(FeaturesContext);
	const {
		Body: { contents }
	} = state;
	return (
		<HeaderSideBarPageBody>
			<JobsData>
				{(Jobs: Job[]) => Jobs.map((Job) => (
					<div key={Job.id}>
						<JobPost job={Job} />
					</div>
				))}
			</JobsData>
		</HeaderSideBarPageBody>
	);
};

export { Body };
