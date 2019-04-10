import { FC } from 'react';
import { AppFeature } from '../../shared/AppBuilder/AppFeature';
import { DashFeatures } from '../../pages/DashBoard/types/DashBoard';
import { App } from '../../shared/AppBuilder/App';

export interface PointsFeatureInterface {
  NoPointsBanner: FC,
}


export class PointsFeature extends AppFeature<DashFeatures>{
  constructor(decoratedApp: App<DashFeatures>) {
    super(decoratedApp);
    const Features
  }
}