import { JobDetailsModalProps, JobDetailsModal } from './public/JobDetailsModal';
import { App } from '../../utils/AppBuilder/App';
import { AppFeature } from '../../utils/AppBuilder/AppFeature';
import { AppFeatures } from '../../app/types/App';
import { FC } from 'react';
import { reducer } from './ducks/jobs.duck';
import { JobsData, JobsDataProps } from './public/JobsData';
import { JobPost, JobPostProps } from './public/JobsPost';
export interface JobsFeatureInterface {
  JobsData: FC<JobsDataProps>,
  JobPost: FC<JobPostProps>,
  JobDetailsModal: FC<JobDetailsModalProps>

}

export class JobsFeature extends AppFeature<AppFeatures> {
  constructor(decoratedApp: App<AppFeatures>) {
    super(decoratedApp);
    const ExposedFeatures: JobsFeatureInterface = {
      JobsData: JobsData,
      JobPost: JobPost,
      JobDetailsModal: JobDetailsModal
    }
    this.setFeatureSettings('Jobs', ExposedFeatures);
    this.setReducerSettings({
      Jobs: reducer
    })
  }
}