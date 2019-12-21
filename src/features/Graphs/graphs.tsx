import { FC } from 'react';
import { AppFeature } from '../../shared/AppBuilder/AppFeature';
import { DashFeatures } from '../../pages/DashBoard/types/DashBoard';
import { App } from '../../shared/AppBuilder/App';
import { GraphModal } from './public/GraphModal';
import { reducer } from './ducks/graphs.duck';

export interface GraphsFeatureInterface {
  GraphModal: FC
};


export class GraphsFeature extends AppFeature<DashFeatures> {
  constructor(decoratedApp: App<DashFeatures>) {
    super(decoratedApp);
    const Features: GraphsFeatureInterface = {
      GraphModal: GraphModal
    }
    this.setFeatureSettings('Graphs', Features);
    this.setReducerSettings({
      Graphs: reducer
    })
  }
}