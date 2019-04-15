import { FC } from 'react';
import { AppFeature } from '../../shared/AppBuilder/AppFeature';
import { DashFeatures } from '../../pages/DashBoard/types/DashBoard';
import { App } from '../../shared/AppBuilder/App';
import { TutorialButton } from './public/TutorialButton';

export interface TutorialFeatureInterface {
  TutorialButton: FC
}

export class TutorialFeature extends AppFeature<DashFeatures> {
  constructor(decoratedApp: App<DashFeatures>) {
    super(decoratedApp);
    const Features: TutorialFeatureInterface = {
      TutorialButton: TutorialButton
    }
    this.setFeatureSettings('Tutorial', Features);
  }
}