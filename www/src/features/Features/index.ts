import { FeaturesButton } from './public/FeaturesButton/FeaturesButton';
import { App } from './../../shared/AppBuilder/App';
import { DashFeatures } from './../../pages/DashBoard/types/DashBoard.d';
import { FC } from 'react';
import { AppFeature } from '../../shared/AppBuilder/AppFeature';
import { reducer } from './ducks/features.duck';
export interface FeaturesFeatureInterface {
  FeaturesButton: FC
}

export class FeaturesFeature extends AppFeature<DashFeatures> {
  constructor(decoratedApp: App<DashFeatures>) {
    super(decoratedApp);
    const ExposedFeatures: FeaturesFeatureInterface = {
      FeaturesButton: FeaturesButton
    }
    this.setFeatureSettings('Features', ExposedFeatures);
    this.setReducerSettings({
      Features: reducer
    })
  }
}