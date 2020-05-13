import React, { useContext } from 'react';
import { render, TestApp, wait } from '../../utils/AppBuilder/test-utils';
import { FeaturesContext } from '../../utils/AppBuilder/featuresContext';
import { StoreContext } from '../../utils/AppBuilder/storeContext';
import { JobsFeature } from './Jobs';
import { RenderResult, fireEvent } from 'react-testing-library';
import { INITIAL_STATE } from './ducks/jobs.duck';
import { async } from 'q';
import { Job } from './types/Jobs';

const JobsImplement = () => {
	// The following comment is an example of how you could set up this component
	const { Jobs } = useContext(FeaturesContext);
	const { JobsData, JobPost } = Jobs;
	console.log(JobsData);
	return (
		<>
			<JobsData>
				{(Jobs: Job[]) => (
					<>
						{Jobs.map((Job, i) => (
							<div key={i}>
								<JobPost job={Job}/>
							</div>
						))}
					</>
				)}
			</JobsData>
		</>
	);
};

describe('Jobs feature', () => {
	let utils: RenderResult;
	beforeEach(() => {
		window.location.reload = jest.fn();
		const Base = TestApp({
			children: <JobsImplement />
		});
		const Test = Base.addFeatures([JobsFeature]);
		const Root = Test.Run({});
		utils = render(<>{Root}</>);
	});
	test('Displays Job Data', () => {
		const { getByText } = utils;
		expect(getByText('Lead Developer')).toBeDefined();
		expect(getByText('Voicir')).toBeDefined();
	})
});
